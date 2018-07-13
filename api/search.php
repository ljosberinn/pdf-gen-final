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
            array_push($personalnummern, [$data['personalnummer'] => $data['name']]);
        }
    }

    if (!empty($personalnummern)) {
        $entries = [1=>2];






        $response = [
            'completed_in' => microtime_float() - $start,
            'data' => $entries,
        ];
    }

    $execution ? ($response['success'] = true) : ($response['error'] = $conn->error);


    echo json_encode($response);

} else {
    header('HTTP/1.0 403 Forbidden');
}
ob_end_clean();
