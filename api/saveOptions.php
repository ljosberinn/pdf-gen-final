<?php

if (isset($_POST['urlaubstage']) || isset($_POST['überstunden'])) {

    session_start();

    include 'functions.php';
    $start_mt = microtime_float();
    include 'db.php';

    $conn = new mysqli($host, $user, $password, $database);
    $conn->set_charset('utf8');

    $targetCol = isset($_POST['urlaubstage']) ? 'urlaubstage' : 'überminuten';
    $value = isset($_POST['urlaubstage']) ? validateInt($_POST['urlaubstage']) : validateInt($_POST['überstunden']);

    $stmt = "UPDATE `personal` SET `" . $targetCol . "` = " . $value . " WHERE `personalnummer` = " . $_SESSION['personalnummer'];
    $update = $conn->query($stmt);

    $response = [
        'completed_in' => microtime_float() - $start_mt,
    ];

    $url = '../index.php';

    if (!$update) {
        $url .= '?errors=dataUpdateFailure';
    } else {
        if (isset($_POST['urlaubstage'])) {
            $_SESSION['urlaubstage'] = $value;
        } else if (isset($_POST['überstunden'])) {
            $_SESSION['überminuten'] = $value;
        }
    }

    header('Location: ' . $url);
}
