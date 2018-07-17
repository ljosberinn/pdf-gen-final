<?php

session_start();

if (isset($_POST['start']) && isset($_POST['end']) && isset($_POST['days'])) {

    include 'functions.php';
    $start_mt = microtime_float();
    header("Content-type: application/json; charset=utf-8");

    $start = validateInt(strtotime($_POST['start']));
    $end = validateInt(strtotime($_POST['end']));
    $days = validateInt($_POST['days']);

    $response = [];

    $value = isset($_POST['daysOff']) ? 0 : $_SESSION['personalnummer'];

    if(isset($_POST['illness'])) {
        $days *= -1;
    }

    if ($start && $end && $days) {
        include 'db.php';

        $conn = new mysqli($host, $user, $password, $database);
        $conn->set_charset('utf8');

        $vacationStmt = "INSERT INTO `vacation` (`person`, `start`, `end`, `days`) VALUES(" . $value . ", " . $start . ", " . $end . ", " . $days . ")";
        $execution = $conn->query($vacationStmt);

        $execution ? ($response['success'] = true) : ($response['error'] = $conn->error);

    } else {
        $response['error'] = 'Invalid parameters!';
    }

    $response['completed_in'] = microtime_float() - $start_mt;

    echo json_encode($response);

} else {
    header('HTTP/1.0 403 Forbidden');
}
