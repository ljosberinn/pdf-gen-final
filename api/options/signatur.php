<?php

if (isset($_FILES['signatur']['tmp_name'])) {

    session_start();

    $imagetype = exif_imagetype($_FILES['signatur']['tmp_name']);

    $errors = [];

    if (!in_array($imagetype, [2, 3])) {
        array_push($errors, 'wrongFileType');
    }

    // max. 1 MB
    if ($_FILES['signatur']['size'] > 1048576) {
        array_push($errors, 'fileTooLarge');
    }

    $url = '../../index.php';

    $errorLength = count($errors);
    if ($errorLength !== 0) {
        $url .= '?errors=';

        foreach ($errors as $error) {
            $url .= $error;

            // für jeden bis auf den letzten Fehler ein , anhängen
            if (array_search($error, $errors) !== ($errorLength - 1)) {
                $url .= ',';
            }
        }
    } else {

        $fileName = $_SESSION['personalnummer'] . '.' . ($imagetype === 2 ? 'jpg' : 'png');
        $files = scandir('../../signatures');

        // delete former file
        if (in_array($fileName, $files)) {
            $index = array_search($fileName, $files);
            unlink($files[$index]);
        }

        // move over & rename
        $moveAndRename = move_uploaded_file($_FILES['signatur']['tmp_name'], '../../signatures/' . $fileName);

        if ($moveAndRename) {
            $_SESSION['signatur'] = 'signatures/' .$fileName;
        }
    }

    header('Location: ' . $url);
}
