<?php

if (isset($_POST['target']) && isset($_POST['id']) && isset($_POST['desc'])) {

    include '../functions.php';

    $start = microtime_float();

    $id = validateInt($_POST['id']);
    $desc = filter_input(INPUT_POST, 'desc', FILTER_SANITIZE_STRING);

    $validTableTargets = ['leistungsart', 'kostenstelle'];

    if (in_array($_POST['target'], $validTableTargets) && $id && $desc) {
        include '../db.php';

        $conn = new mysqli($host, $user, $password, $database);
        $conn->set_charset('utf8');

        $targetTable = $_POST['target'] === 'leistungsart' ? 'leistungsarten' : 'kostenstellen';

        $insertionQuery = "INSERT INTO `" . $targetTable . "` (`" .$_POST['target']. "`, `beschreibung`) VALUES(" .$id. ", '" .$desc. "')";

        $execution = $conn->query($insertionQuery);

        $response = [
            'completed_in' => microtime_float() - $start,
            'query' => $insertionQuery,
        ];

        $execution ? ($response['success'] = true) : ($response['error'] = $conn->error);

    }

    echo json_encode($response);

} else {
    header('Location: ../../index.php');
}
