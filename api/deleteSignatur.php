<?php

session_start();

$remove = unlink('../' . $_SESSION['signatur']);

$response = [
    'success' => $remove,
    'link' => $_SESSION['signatur'],
];

unset($_SESSION['signatur']);

echo json_encode($response);
