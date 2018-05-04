<?php

if (isset($_POST['pdfId'])
    && is_numeric($_POST['pdfId'])
    && strlen($_POST['pdfId']) == 10
    && isset($_POST['mode'])
    && ($_POST['mode'] == 'permanent'
    || $_POST['mode'] == 'temporary')
    ) {

    if ($_POST['mode'] == 'permanent') {
        $targetTable = 'archiv';
    } else {
        $targetTable = 'zwischenspeicher';
    }

    session_start();
    include 'db.php';
    $conn = new mysqli($host, $user, $password, $database);
    $conn->set_charset('utf8');

    $selectionStatement = "SELECT * FROM `" .$_SESSION['personalnummer']. "_" .$targetTable. "`  WHERE `day` = " .$_POST['pdfId']. "";
    $selection = $conn->query($selectionStatement);

    $result = [];

    if ($selection->num_rows == 1) {
        while ($data = $selection->fetch_assoc()) {
          array_push($result, $data);
        }
    }

    echo json_encode($result, JSON_NUMERIC_CHECK);
} else {
    header('HTTP/1.0 403 Forbidden');
}

?>