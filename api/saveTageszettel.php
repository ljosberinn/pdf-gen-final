<?php

$_POST = [
  'datum' => '25.04.2018',

  'von' => '9:15',
  'bis' => '17:15',

  'außer-haus' => '',
  'frühstückspause' => 'on',

  'kostenstelle-1' => '112',
  'auftragsnummer-1' => '',
  'kunde-1' => 'Ausbildung',
  'leistungsart-1' => '970',
  'minuten-1' => '465',
  'anzahl-1' => '',
  'materialnummer-1' => '',
  'kostenstelle-2' => '',
  'auftragsnummer-2' => '',
  'kunde-2' => '',
  'leistungsart-2' => '',
  'minuten-2' => '',
  'anzahl-2' => '',
  'materialnummer-2' => '',
  'kostenstelle-3' => '',
  'auftragsnummer-3' => '',
  'kunde-3' => '',
  'leistungsart-3' => '',
  'minuten-3' => '',
  'anzahl-3' => '',
  'materialnummer-3' => '',
  'kostenstelle-4' => '',
  'auftragsnummer-4' => '',
  'kunde-4' => '',
  'leistungsart-4' => '',
  'minuten-4' => '',
  'anzahl-4' => '',
  'materialnummer-4' => '',
  'kostenstelle-5' => '',
  'auftragsnummer-5' => '',
  'kunde-5' => '',
  'leistungsart-5' => '',
  'minuten-5' => '',
  'anzahl-5' => '',
  'materialnummer-5' => '',
  'kostenstelle-890' => '890',
  'leistungsart-890' => '997',
  'minuten-890' => '0',
  'now' => ''
];

if (isset($_POST)) {

    session_start();

    include 'functions.php';

    if (isset($_POST['now'])) {
        $table = $_SESSION['personalnummer']. '_archiv';
    } else if (isset($_POST['later'])) {
        $table = $_SESSION['personalnummer']. '_zwischenspeicher';
    }

    $created = time('now');
    $day = returnUnixTSFromDate($_POST['datum']);
    $startTimestamp = returnUnixTSFromDate($_POST['datum']. ' ' .$_POST['von']);
    $endTimestamp = returnUnixTSFromDate($_POST['datum']. ' ' .$_POST['bis']);
    $minutesWorked = ($endTimestamp-$startTimestamp) / 60;

    if ($_POST['frühstückspause'] == 'on') {
        $minutesWorked -= 15;
    }

    if ($_POST['mittagspause'] == 'on') {
        $minutesWorked -= 30;
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
      'minutesWorked'
    ];

    foreach ($secondaryInformation as $var) {
        array_push($posten, $var);
    }

    foreach ($posten as $var) {
        $resultingData[$var] = ${$var};
    }

    echo '<pre>';

    echo '<script>console.log(' .json_encode($resultingData, JSON_NUMERIC_CHECK). ');</script>';

    echo '</pre>';




}

?>