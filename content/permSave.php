<?php

session_start();

$tableColumns = [
  'Datum'               => 'has-text-right',
  'von - bis'           => 'has-text-centered',
  'Pausen & außer Haus' => '',
  'Anwesenheit'         => 'has-text-right',
];

$tableColumnKeys = array_keys($tableColumns);

?>

<div id="perm-save" class="m-t-lg m-b-lg m-l-lg m-r-lg">
<table class="table is-striped is-hoverable is-fullwidth" id="perm-save-table">

<thead>
<tr>

<?php

foreach ($tableColumns as $rowDescription => $class) {
    $class = $class !== "" ? 'class="' . $class . '"' : '';
    echo '<td ' . $class . '>' . $rowDescription . '</td>';
}

?>

<td colspan="3"></td>

</tr>
</thead>
<tbody>

<?php

require 'api/db.php';

$wochentage = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
$weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


if (!$conn) {
    $conn = new mysqli($host, $user, $password, $database);
    $conn->set_charset('utf8');
}

$getAllData = 'SELECT `day`, `startTimestamp`, `endTimestamp`, `frühstückspause`, `mittagspause`, `außer-haus`, `minutesWorked` FROM `' .$_SESSION['personalnummer']. '_archiv` ORDER BY `day` DESC';
$allData = $conn->query($getAllData);
$data = [];

if ($allData->num_rows > 0) {
    while ($dataset = $allData->fetch_assoc()) {
        array_push($data, $dataset);
    }
}

$count = $frühstückspause = $mittagspause = $außerHaus =  $arbeitszeitSumme = 0;

foreach ($data as $dataset) {

    $count += 1;

    if ($count > 10) {
        $trClass = 'class="hidden-tr"';
    }

    $pausenAußerHaus = '';

    if ($dataset['frühstückspause'] == 0) {
        $pausenAußerHaus .= '<span class="tag is-info">OPA</span> ';
        $frühstückspause += 1;
    }

    if ($dataset['mittagspause'] == 0) {
        $pausenAußerHaus .= '<span class="tag is-primary">OMI</span> ';
        $mittagspause += 1;
    }

    $außerHaus += $dataset['außer-haus'];

    if ($dataset['außer-haus'] > 0) {
        $pausenAußerHaus .= '<span class="tag is-warning">außer Haus: ' .$dataset['außer-haus']. '</span>';
    }

    $arbeitszeitSumme += $dataset['minutesWorked'];

    if ($dataset['minutesWorked'] < $_SESSION['arbeitszeit']) {
        $arbeitszeitClass = 'has-text-danger';
        $addendum = '(-' .($_SESSION['arbeitszeit'] - $dataset['minutesWorked']). ')';
    } else if ($dataset['minutesWorked'] > $_SESSION['arbeitszeit']) {
        $arbeitszeitClass = 'has-text-success	';
        $addendum = '(+' .($dataset['minutesWorked'] - $_SESSION['arbeitszeit']). ')';
    } else {
        $arbeitszeitClass = $addendum = '';
    }

    $arbeitszeit = '<span class="' .$arbeitszeitClass. '">' .$dataset['minutesWorked']. ' ' .$addendum. '</span>';

    $dayString = strftime('%a, %d.%m.%Y', $dataset['day']);

    foreach ($weekdays as $weekday) {
        $index = array_search($weekday, $weekdays);
        if (strpos($dayString, $weekday) !== false) {
            $dayString = str_replace($weekday, $wochentage[$index], $dayString);
        }
    }

    echo '
    <tr ' .$trClass. '>
      <td class="has-text-right">' .$dayString. '</td>
      <td class="has-text-centered">' .date('H:i', $dataset['startTimestamp']). ' - ' .date('H:i', $dataset['endTimestamp']). '</td>
      <td>' .$pausenAußerHaus. '</td>
      <td class="has-text-right">' .$arbeitszeit. '</td>
      <td>
        <button class="button is-danger is-small perm-delete-btn" value="' .$dataset['day']. '">
          <span class="icon">
            <i class="fas fa-trash-alt"></i>
          </span>
        </button>
      </td>
      <td>
        <button class="button is-info is-small perm-edit-btn" name="pdfId" value="' .$dataset['day']. '">
          <span class="icon">
            <i class="far fa-edit"></i>
          </span>
        </button>
      </td>
      <td>
        <form action="api/createPDF.php" method="POST">
          <button class="button is-warning is-small" name="pdfId" value="' .$dataset['day']. '">
            <span class="icon">
              <i class="fas fa-download"></i>
            </span>
          </button>
        </form>
      </td>
    </tr>';

    if ($count == 10) {
        echo '
        <tr id="perm-save-tr">
          <td colspan="7" class="has-text-centered">
            <button class="button is-warning" type="button" id="perm-save-toggler">alle Tageszettel anzeigen</button>
          </td>
        </tr>';
    }
}
?>

</tbody>
<tfoot>
<tr>
<?php

$averageArbeitszeitSumme = round($arbeitszeitSumme / $count);
$theoreticalMustHave = $_SESSION['arbeitszeit'] * $count;

if ($arbeitszeitSumme < $theoreticalMustHave) {
    $hours = round(($theoreticalMustHave - $arbeitszeitSumme) / 60, 2);
    $theoreticalOutput = '<span class="tag is-danger">' .$hours. ' Unterstunden</span>';
} else if ($arbeitszeitSumme > $theoreticalMustHave) {
    $hours = round(( $arbeitszeitSumme - $theoreticalMustHave) / 60, 2);
    $theoreticalOutput = '<span class="tag is-success">' .$hours. ' Überstunden</span>';
}

$arbeitszeitClass = $addendum = '';

if ($averageArbeitszeitSumme < $_SESSION['arbeitszeit']) {
    $arbeitszeitClass = 'has-text-danger';
    $addendum = '(-' .($_SESSION['arbeitszeit'] - $averageArbeitszeitSumme). ')';
} else if ($averageArbeitszeitSumme > $_SESSION['arbeitszeit']) {
    $arbeitszeitClass = 'has-text-success	';
    $addendum = '(+' .($averageArbeitszeitSumme - $_SESSION['arbeitszeit']). ')';
}

echo '
<td class="has-text-right">' .$count. ' Tageszettel</td>
<td></td>
<td>
  <span class="tag is-info">OPA: ' .$frühstückspause. '</span>
  <span class="tag is-primary">OMI: ' .$mittagspause. '</span>
  <span class="tag is-warning">außer Haus: ' .$außerHaus. '</span>
</td>
<td class="has-text-right ' .$arbeitszeitClass. '">Ø ' .$averageArbeitszeitSumme. ' ' .$addendum. '<br />' .$theoreticalOutput. '</td>
<td colspan="2"></td>';

?>
</tr>
</tfoot>
</table>
</div>