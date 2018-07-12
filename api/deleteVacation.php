<?php

session_start();

if (isset($_POST['start'])) {
    include 'functions.php';
    $start = microtime_float();
    header("Content-type: application/json; charset=utf-8");

    $start = validateInt($_POST['start']);

    include 'db.php';

    $conn = new mysqli($host, $user, $password, $database);
    $conn->set_charset('utf8');

    $deleteStmt = "DELETE FROM `vacation`  WHERE `person` = " .$_SESSION['personalnummer']. " AND `start` = " .$start;
    $delete = $conn->query($deleteStmt);

    $response = [
        'completed_in' => microtime_float() - $start,
    ];

    $delete ? ($response['success'] = true) : ($response['error'] = $conn->error);

    echo json_encode($response);

} else {
    header('http/1.0 403 Forbidden');
}