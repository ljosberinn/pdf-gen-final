<?php

session_start();

if (isset($_POST['target']) && isset($_POST['id']) && $_SESSION['admin'] == 1) {
    include '../functions.php';
    $start = microtime_float();

    header("Content-type: application/json; charset=utf-8");

    $id = validateInt($_POST['id']);

    $validTableTargets = ['leistungsart', 'kostenstelle'];

    if (in_array($_POST['target'], $validTableTargets) && $id) {
        include '../db.php';

        $conn = new mysqli($host, $user, $password, $database);
        $conn->set_charset('utf8');

        $targetTable = $_POST['target'] === 'leistungsart' ? 'leistungsarten' : 'kostenstellen';

        $removalQuery = "DELETE FROM `" .$targetTable. "` WHERE `" .$_POST['target']. "` = " .$id;

        $execution = $conn->query($removalQuery);

        $response = [
            'completed_in' => microtime_float() - $start,
        ];

        $execution ? ($response['success'] = true) : ($response['error'] = $conn->error);

    }

    echo json_encode($response);

} else {
    header('Location: ../../index.php');
}
