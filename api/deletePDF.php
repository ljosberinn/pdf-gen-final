<?php

if (isset($_POST['pdfId'])
    && is_numeric($_POST['pdfId'])
    && strlen($_POST['pdfId']) == 10
    && isset($_POST['mode'])
    && ($_POST['mode'] == 'permanent'
        || $_POST['mode'] == 'temporary')
) {
    $targetTable = $_POST['mode'] == 'permanent' ? 'archiv' : 'zwischenspeicher';

    session_start();
    include 'db.php';

    $conn = new mysqli($host, $user, $password, $database);
    $conn->set_charset('utf8');

    $deletionStatement = "DELETE FROM `" . $_SESSION['personalnummer'] . "_" . $targetTable . "`  WHERE `day` = " . $_POST['pdfId'] . "";
    $deletion = $conn->query($deletionStatement);
} else {
    header('HTTP/1.0 403 Forbidden');
}
