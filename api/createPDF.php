<?php

session_start();

require 'fpdf181/fpdf.php';
require 'fpdi161/fpdi.php';


/**
 * Alle in dieser Datei erwähnten eigenen <public methods> (placeKostenstelle, placePersonalnummer, etc.) sind in /fpdi161/fpdi.php am Ende angefügt (ab Zeile 691)
 */

if (isset($_POST['pdfId'])) {
    include 'db.php';
    include 'functions.php';

    $conn = new mysqli($host, $user, $password, $database);
    $conn->set_charset('utf8');

    $getPDFDataQuery = 'SELECT * FROM `' .$_SESSION['personalnummer']. '_archiv` WHERE `day` = ' .$_POST['pdfId'];
    $getPDFData = $conn->query($getPDFDataQuery);

    $data = $resultingData = [];

    if ($getPDFData->num_rows == 1) {
        while ($dataset = $getPDFData->fetch_assoc()) {
            array_push($data, $dataset);
        }
    }

    $data = $data[0];

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

        if (!empty($data['minuten-' .$i])) {
            foreach ($posten as $var) {
                if ($data[$var. '-' .$i] != 0) {
                    array_push(${$var}, $data[$var. '-' .$i]);
                }
            }
        }
    }

    foreach ($posten as $var) {
        $resultingData[$var] = ${$var};
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
        ${$var} = $data[$var];
        $resultingData[$var] = ${$var};
    }

    $length = count($resultingData['minuten']);
}

$pdf = returnPDFBasics();

$date = date('Y-m-d', $day);
$description = $date. ' - ' .$_SESSION['name'];

$basicMethods = [
  'SetAuthor'           => $_SESSION['name'],
  'SetTitle'            => $description,
  'placeName'           => $_SESSION['name'],
  'SetCreator'          => $_SESSION['name'],
  'placePersonalnummer' => $_SESSION['personalnummer'],
  'placeDate'           => $day,
  'placeStartEndTime'   => [$startTimestamp, $endTimestamp],
  'SetFontSize'         => 16,
];


foreach ($basicMethods as $method => $value) {
    call_user_func([$pdf, $method], $value);
}


// prepare row insertions
$methods = [
  'placeKostenstelle'   => $resultingData['kostenstelle'],
  'placeAuftragsnummer' => $resultingData['auftragsnummer'],
  'placeKunde'          => $resultingData['kunde'],
  'placeLeistungsart'   => $resultingData['leistungsart'],
  'placeMinuten'        => $resultingData['minuten'],
  'placeAnzahl'         => $resultingData['anzahl'],
  'placeMaterialnummer' => $resultingData['materialnummer'],
];

// execute row insertions
for ($i = 0; $i <= ($length - 1); $i += 1) {

    $yCoord = 36 + $i * 7.7725;

    foreach ($methods as $method => $array) {
        call_user_func_array([$pdf, $method], [$array[$i], $yCoord]);
    }
}

// occasionally add special row
if ($has890 > 0) {

    $add890Data = [
      'placeKostenstelle' => 890,
      'placeLeistungsart' => 996,
      'placeMinuten' => $has890,
    ];

    foreach ($add890Data as $method => $value) {
        call_user_func_array([$pdf, $method], [$value, 206.744]);
    }
}

$pdf->placeMinuten($minutesWorked, 214.7675);

// außer Haus

if ($außerHaus > 0) {
    $pdf->SetXY(70.97, 214.7675);
    $pdf->MultiCell(53.55, 3.5, iconv('UTF-8', 'windows-1252', 'außer Haus ' .$außerHaus));
}

// OPA / OMI
if ($frühstückspause == 0 || $mittagspause == 0) {
    if ($mittagspause == 0 && $frühstückspause == 0) {
        $pausenString = 'OPA & OMI';
    }
    if ($mittagspause == 0 && $frühstückspause != 0) {
        $pausenString = 'OMI';
    }
    if ($frühstückspause == 0 && $mittagspause != 0) {
        $pausenString = 'OPA';
    }

    $pdf->placePause($pausenString);
}

if (isset($_POST['pdfId'])) {
    $pdf->output($description. '.pdf', 'D');
} else {
    $pdf->output($description. '.pdf', 'I');
}

?>