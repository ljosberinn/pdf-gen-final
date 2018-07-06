<?php

ob_start();

session_start();

if (isset($_POST['vorname-neu'])
    && isset($_POST['nachname-neu'])
    && isset($_POST['personalnummer-neu'])
    && isset($_POST['arbeitszeit-neu'])
    && isset($_POST['überstunden-neu'])
    && isset($_POST['urlaubstage-neu'])
    && isset($_POST['used_urlaubstage-neu'])
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
    $used_urlaubstage = filter_input(INPUT_POST, 'used_urlaubstage-neu', FILTER_SANITIZE_NUMBER_INT);
    $admin = filter_input(INPUT_POST, 'admin-neu', FILTER_SANITIZE_NUMBER_INT);

    $data = [
      $vorname, $nachname, $personalnummer, $arbeitszeit, $überminuten, $urlaubstage, $used_urlaubstage, $admin
    ];

    $insertQuery = "INSERT INTO `personal` (`personalnummer`, `name`, `arbeitszeit`, `urlaubstage`, `überminuten`) VALUES(" .$personalnummer. ", '" .$vorname. " " . $nachname. "', " .$arbeitszeit. ", " .$urlaubstage. ", " .$überminuten. ")";

    include '../db.php';

    $conn = new mysqli($host, $user, $password, $database);
    $conn->set_charset('utf8');

    $response = [
        'completed_in' => microtime_float() - $start,
        'data' => $data,
        'query' => $insertQuery,
    ];

    echo json_encode($response);
} else {
    header('Location: ../../index.php');
}

ob_end_flush();