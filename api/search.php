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

    $personalnummern = getPersonalnummern($conn);

    if (!empty($personalnummern)) {

        $entries = getEntries($conn, $personalnummern, $type, $value);
        $leistungsarten = returnPlainLeistungsarten($conn);

        // Array nach Erstelldatum absteigend sortieren
        usort(
            $entries, function ($x, $y) {
                if ($x['day'] === $y['day']) {
                    return 0;
                }
                return $x['day'] > $y['day'] ? 0 : 1;
            }
        );

        $response = [
            'completed_in' => microtime_float() - $start,
            'data' => filterEntries($entries, $type, $value, $leistungsarten),
        ];
    }

    $response ? ($response['success'] = true) : ($response['error'] = $conn->error);

    echo json_encode($response, JSON_NUMERIC_CHECK);

} else {
    header('HTTP/1.0 403 Forbidden');
}
ob_end_clean();
