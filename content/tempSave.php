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

<div id="temp-save" class="m-t-lg m-b-lg m-l-lg m-r-lg">
<table class="table is-striped is-hoverable is-fullwidth" id="temp-save-table">

<thead>
<tr>

<?php

foreach ($tableColumns as $rowDescription => $class) {
  if ($class != "") {
    $class = 'class="' .$class. '"';
  } else {
    $class = '';
  }

  echo '
  <td ' .$class. '>' .$rowDescription. '</td>';
}

?>

<td colspan="3"></td>

</tr>
</thead>
<tbody>

<?php

require 'api/db.php';

if(!$conn) {

  $conn = new mysqli($host, $user, $password, $database);
  $conn->set_charset('utf8');

}

$getAllData = 'SELECT `day`, `startTimestamp`, `endTimestamp`, `frühstückspause`, `mittagspause`, `außer-haus`, `minutesWorked` FROM `' .$_SESSION['personalnummer']. '_zwischenspeicher` ORDER BY `day` DESC';
$allData = $conn->query($getAllData);
$data = [];

if ($allData->num_rows > 0) {
    while ($dataset = $allData->fetch_assoc()) {

        array_push($data, $dataset);

    }
}

$frühstückspause = $mittagspause = $außerHaus =  $arbeitszeitSumme = 0;

foreach ($data as $dataset) {

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

    echo '
    <tr ' .$trClass. '>
      <td class="has-text-right">' .strftime('%a, %d.%m.%Y', $dataset['day']). '</td>
      <td class="has-text-centered">' .date('H:i', $dataset['startTimestamp']). ' - ' .date('H:i', $dataset['endTimestamp']). '</td>
      <td>' .$pausenAußerHaus. '</td>
      <td class="has-text-right">' .$arbeitszeit. '</td>
      <td>
        <button class="button is-danger is-small temp-delete-btn" value="' .$dataset['day']. '">
          <span class="icon">
            <i class="fas fa-trash-alt"></i>
          </span>
        </button>
      </td>
      <td>
        <button class="button is-info is-small temp-edit-btn" name="pdfId" value="' .$dataset['day']. '">
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
}
?>

</tbody>
<tfoot>
</tfoot>
</table>
</div>