<?php

ob_start();

session_start();

if (isset($_POST['vorname-neu'])
    && isset($_POST['nachname-neu'])
    && isset($_POST['personalnummer-neu'])
    && isset($_POST['arbeitszeit-neu'])
    && isset($_POST['überstunden-neu'])
    && isset($_POST['urlaubstage-neu'])
    && isset($_POST['admin-neu'])
    && $_SESSION['admin'] == 1
) {
    include '../functions.php';
    $start = microtime_float();
    header("Content-type: application/json; charset=utf-8");

    $vorname = filter_input(INPUT_POST, 'vorname-neu', FILTER_SANITIZE_STRING);
    $nachname = filter_input(INPUT_POST, 'nachname-neu', FILTER_SANITIZE_STRING);
    $personalnummer = filter_input(INPUT_POST, 'personalnummer-neu', FILTER_SANITIZE_NUMBER_INT);
    $arbeitszeit = filter_input(INPUT_POST, 'arbeitszeit-neu', FILTER_SANITIZE_NUMBER_INT);
    $überminuten = filter_input(INPUT_POST, 'überstunden-neu', FILTER_SANITIZE_NUMBER_INT);
    $urlaubstage = filter_input(INPUT_POST, 'urlaubstage-neu', FILTER_SANITIZE_NUMBER_INT);
    $admin = filter_input(INPUT_POST, 'admin-neu', FILTER_SANITIZE_NUMBER_INT);

    include '../db.php';

    $conn = new mysqli($host, $user, $password, $database);
    $conn->set_charset('utf8');

    $confirmUniquePersonalnummerStmt = "SELECT * FROM `personal` WHERE `personalnummer` = " .$personalnummer;
    $confirmUniquePersonalnummer = $conn->query($confirmUniquePersonalnummerStmt);

    $response = [];

    if ($confirmUniquePersonalnummer->num_rows === 1) {
        $response['error'] = "Duplicate entry '" .$personalnummer. "' for key 'personalnummer'";
    } else if ($confirmUniquePersonalnummer->num_rows === 0) {

        $insertQuery = "INSERT INTO `personal`
        (`personalnummer`, `name`, `arbeitszeit`, `urlaubstage`, `überminuten`, `rolle`)
        VALUES(" .$personalnummer. ", '" .ucfirst($vorname). " " .ucfirst($nachname). "', " .$arbeitszeit. ", " .$urlaubstage. ", " .$überminuten. ", " .$admin. ")";

        $execution = $conn->query($insertQuery);

        foreach (['archiv', 'zwischenspeicher'] as $tableAffix) {
            $conn->query("CREATE TABLE IF NOT EXISTS `". $personalnummer. "_" .$tableAffix. "` LIKE `1090_" .$tableAffix. "`");
        }

        $execution ? ($response['success'] = true) : ($response['error'] = $conn->error);

    }

    $response['completed_in'] = microtime_float() - $start;

    echo json_encode($response);
} else {
    header('Location: ../../index.php');
}

ob_end_flush();