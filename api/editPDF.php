<?php

if (isset($_GET['pdfId'])
    && is_numeric($_GET['pdfId'])
    && strlen($_GET['pdfId']) == 10
    && isset($_GET['mode'])
    && ($_GET['mode'] == 'permanent'
    || $_GET['mode'] == 'temporary')
    ) {

    if ($_GET['mode'] == 'permanent') {
        $targetTable = 'archiv';
    } else {
        $targetTable = 'zwischenspeicher';
    }

    session_start();
    include 'db.php';
    $conn = new mysqli($host, $user, $password, $database);
    $conn->set_charset('utf8');

    $selectionStatement = "SELECT * FROM `" .$_SESSION['personalnummer']. "_" .$targetTable. "`  WHERE `day` = " .$_GET['pdfId']. "";
    $selection = $conn->query($selectionStatement);

    $result = [];

    if ($selection->num_rows == 1) {
        while ($data = $selection->fetch_assoc()) {
            array_push($result, $data);
        }
    }

    $result = $result[0];

    $result['day'] = date('Y-m-d', $result['day']);
    $result['startTimestamp'] = date('H:i', $result['startTimestamp']);
    $result['endTimestamp'] = date('H:i', $result['endTimestamp']);

    echo json_encode($result, JSON_NUMERIC_CHECK);
} else {
    header('HTTP/1.0 403 Forbidden');
}

?>