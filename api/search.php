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

        $constantRemovals = [
            'created',
            'startTimestamp',
            'endTimestamp',
            'frühstückspause',
            'mittagspause',
            'minuten-890',
            'kostenstelle-890',
            'leistungsart-890',
            'minutesWorked',
            'außer-haus',
            'kostenstelle',
        ];

        $iteratableRemovals = [
            'kostenstelle',
            'materialnummer',
            'anzahl',
        ];

        // Array nach Erstelldatum absteigend sortieren
        usort($entries, function ($x, $y) {
            if ($x['day'] === $y['day']) {
                return 0;
            }
            return $x['day'] > $y['day'] ? 0 : 1;
        });

        foreach ($entries as $entry) {
            $index = array_search($entry, $entries);
            $entry['rows'] = [];

            // loopt alle möglichen Spalten und entfernt leere Einträge, falls der Wert nicht in der gesuchten Spalte zu finden ist
            for ($i = 1; $i <= 22; $i += 1) {
                $empty = false;

                foreach ($iteratableRemovals as $key) {
                    unset($entry[$key. '-' .$i]);
                }

                foreach ($checkForEmpty as $key) {
                    if ($key == $type && strpos($entry[$key. "-" .$i], $value) === false) {
                        $empty = true;
                        break;
                    }
                }

                if (!$empty) {
                    array_push(
                        $entry['rows'],
                        [
                            'kunde' => $entry['kunde-' .$i],
                            'auftragsnummer' => $entry['auftragsnummer-' .$i],
                            'leistungsart' => $entry['leistungsart-' .$i],
                            'minuten' => $entry['minuten-' .$i],
                        ]
                    );
                }

                foreach ($checkForEmpty as $key) {
                    unset($entry[$key. "-" .$i]);
                }
            }

            foreach ($constantRemovals as $key) {
                unset($entry[$key]);
            }

            $entry['day'] = date('d.m.Y', $entry['day']);

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
