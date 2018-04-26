<?php

session_start();

require 'fpdf181/fpdf.php';
require 'fpdi161/fpdi.php';

/**
 * Alle in dieser Datei erwähnten eigenen <public methods> (placeKostenstelle, placePersonalnummer, etc.) sind in /fpdi161/fpdi.php am Ende angefügt (ab Zeile 691)
 */

$pdf = returnPDFBasics();

$date = date('y-m-d', time('now'));
$description = $date. ' - ' .$_SESSION['name'];

$basicMethods = [
  'SetAuthor'           => $description,
  'SetTitle'            => $description,
  'placeName'           => $_SESSION['name'],
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

$pdf->output($description, 'I');

?>