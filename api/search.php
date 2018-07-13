<?php
ob_clean();
session_start();

if (isset($_POST['type']) && isset($_POST['value'])) {
    include 'functions.php';
    $start = microtime_float();
    header("Content-type: application/json; charset=utf-8");

    $type = filter_input(INPUT_POST, 'type', FILTER_SANITIZE_STRING);
    $value = filter_input(INPUT_POST, 'value', FILTER_SANITIZE_STRING);

    include 'db.php';

    $conn = new mysqli($host, $user, $password, $database);
    $conn->set_charset('utf8');

    $personalnummern = [];

    $getPersonalnummernStmt = "SELECT `personalnummer`, `name` FROM `personal`";
    $getPersonalnummern = $conn->query($getPersonalnummernStmt);

    if ($getPersonalnummern->num_rows > 0) {
        while ($data = $getPersonalnummern->fetch_assoc()) {
            array_push($personalnummern, ['personalnummer' => $data['personalnummer'], 'name' => $data['name']]);
        }
    }

    if (!empty($personalnummern)) {

        $entries = [];

        foreach ($personalnummern as $dataset) {
            $searchQuery = "SELECT * FROM `" . $dataset['personalnummer'] . "_archiv` WHERE ";
            for ($i = 1; $i <= 22; $i += 1) {
                $searchQuery .= "`" . $type . "-" . $i . "` LIKE '%" . $value . "%' OR ";
            }
            $searchQuery = substr($searchQuery, 0, -4);

            $search = $conn->query($searchQuery);

            if ($search->num_rows > 0) {
                while ($data = $search->fetch_assoc()) {
                    $data['createdBy'] = $dataset['name'];
                    array_push($entries, $data);
                }
            }
        }

        $checkForEmpty = [
            'kostenstelle',
            'auftragsnummer',
            'kunde',
            'leistungsart',
            'minuten',
            'anzahl',
            'materialnummer',
        ];

        foreach ($entries as $entry) {
            $index = array_search($entry, $entries);

            // loopt alle möglichen Spalten und entfernt leere Einträge, falls der Wert nicht in der gesuchten Spalte zu finden ist
            for ($i = 1; $i <= 22; $i += 1) {
                $empty = false;

                foreach ($checkForEmpty as $key) {
                    if ($key == $type && strpos($entry[$key. "-" .$i], $value) === false) {
                        $empty = true;
                        break;
                    }
                }

                if ($empty) {
                    foreach ($checkForEmpty as $key) {
                        unset($entry[$key. "-" .$i]);
                    }
                }
            }

            $entries[$index] = $entry;
        }

        $response = [
            'completed_in' => microtime_float() - $start,
            'data' => $entries
        ];
    }

    $response ? ($response['success'] = true) : ($response['error'] = $conn->error);


    echo json_encode($response, JSON_NUMERIC_CHECK);

} else {
    header('HTTP/1.0 403 Forbidden');
}
ob_end_clean();
