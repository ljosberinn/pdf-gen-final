<?php

session_start();

if (isset($_POST['start']) && isset($_POST['type'])) {
    include 'functions.php';
    $start_mt = microtime_float();
    header("Content-type: application/json; charset=utf-8");

    $start = validateInt($_POST['start']);
    $type = filter_input(INPUT_POST, 'type', FILTER_SANITIZE_STRING);

    $person = in_array($type, ['vacation', 'illness']) ? $_SESSION['personalnummer'] : 0;

    include 'db.php';

    $conn = new mysqli($host, $user, $password, $database);
    $conn->set_charset('utf8');

    $deleteStmt = "DELETE FROM `vacation` WHERE `person` = " . $person . " AND `start` = " . $start;
    $delete = $conn->query($deleteStmt);

    $response = [
        'completed_in' => microtime_float() - $start_mt,
    ];

    $delete ? ($response['success'] = true) : ($response['error'] = $conn->error);

    echo json_encode($response);
} else {
    header('http/1.0 403 Forbidden');
}
