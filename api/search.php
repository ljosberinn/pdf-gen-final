<?php

session_start();

if (isset($_POST['string'])) {
    include '../functions.php';
    $start = microtime_float();
    header("Content-type: application/json; charset=utf-8");

    $string = filter_input(INPUT_POST, 'string', FILTER_SANITIZE_STRING);

    include '../db.php';

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
        $entries = [];

        




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
