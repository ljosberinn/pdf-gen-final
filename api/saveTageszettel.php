<?php

if (isset($_POST)) {

    session_start();
    ob_start();

    include 'functions.php';
    include 'db.php';

    if (isset($_POST['now'])) {
        $type = 'archiv';
    } else if (isset($_POST['later'])) {
        $type = 'zwischenspeicher';
    }

    $has890 = $_POST['minuten-890'] != 0 ? $_POST['minuten-890'] : 0;

    $getCreationStatement = getCreationStatement($type, $_SESSION['personalnummer']);

    $created = time('now');
    $day = returnUnixTSFromDate($_POST['datum']);
    $startTimestamp = returnUnixTSFromDate($_POST['datum']. ' ' .$_POST['von']);
    $endTimestamp = returnUnixTSFromDate($_POST['datum']. ' ' .$_POST['bis']);
    $minutesWorked = ($endTimestamp-$startTimestamp) / 60;

    $_POST['frühstückspause'] == 'on' ? ($minutesWorked -= 15 xor $frühstückspause = 1) : $frühstückspause = 0;
    $_POST['mittagspause'] == 'on' ? ($minutesWorked -= 30 xor $mittagspause = 1) : $mittagspause = 0;

    $außerHaus = $_POST['außer-haus'];
    if ($außerHaus == "") {
        $außerHaus = 0;
    }

    $resultingData = [];

    $posten = [
        'kostenstelle',
        'auftragsnummer',
        'kunde',
        'leistungsart',
        'minuten',
        'anzahl',
        'materialnummer',
    ];

    foreach ($posten as $name) {
        ${$name} = [];
    }

    for ($i = 1; $i <= 22; $i += 1) {
        if (!empty($_POST["minuten-" .$i])) {
            foreach ($posten as $var) {
                array_push(${$var}, $_POST[$var. '-' .$i]);
            }
        }
    }

    $secondaryInformation = [
        'day',
        'created',
        'startTimestamp',
        'endTimestamp',
        'minutesWorked',
        'frühstückspause',
        'mittagspause',
        'außerHaus',
    ];

    foreach ($secondaryInformation as $var) {
        array_push($posten, $var);
    }

    foreach ($posten as $var) {
        $resultingData[$var] = ${$var};
    }

    $conn = new mysqli($host, $user, $password, $database);
    $conn->set_charset('utf8');

    // create new table if not existing
    $createTable = $conn->query($getCreationStatement);

    // build data

    $length = count($resultingData['minuten']);

    $insertionStatement = buildInsertionStatement($_SESSION['personalnummer'], $type, $length, $has890);

    $insertionStatement = substr($insertionStatement, 0, -2). ') VALUES(' .$day. ', ' .$created. ', ' .$startTimestamp. ', ' .$endTimestamp. ', ' .$minutesWorked. ', ' .$frühstückspause. ', ' .$mittagspause. ', ' .$außerHaus. ', ';

    $insertionStatement = appendDataToInsertionStatement($insertionStatement, $resultingData, $length, $has890);

    // kill previous data if existing

    $tables = ['archiv', 'zwischenspeicher'];

    foreach ($tables as $table) {
        $deletionStatement =  "DELETE FROM `" .$_SESSION['personalnummer']. "_" .$table. "`  WHERE `day` = " .$day;
        $deletion = $conn->query($deletionStatement);
    }

    // insert data

    $insert = $conn->query($insertionStatement);

    $insert && $type == 'zwischenspeicher' ? header("Location: ../?saved") : include 'createPDF.php';

    ob_end_flush();
}

?>