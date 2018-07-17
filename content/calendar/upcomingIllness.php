

<?php

$getYourIllnessStmt = "SELECT `start`, `end`, `days` FROM `vacation` WHERE `person` = " . $_SESSION['personalnummer'] . " AND `start` >= " . (time('now') - 86400 * 28 * 3). " AND `days` < 0";
$getYourIllness = $conn->query($getYourIllnessStmt);

$illDays = [];

if ($getYourIllness->num_rows > 0) {
    while ($data = $getYourIllness->fetch_assoc()) {
        array_push(
            $illDays, [
                'start' => $data['start'],
                'end' => $data['end'],
                'days' => $data['days'],
            ]
        );
    }
}

if (!empty($illDays)) {

    echo '
    <h1>
      <strong>Krankheitsbedingte Fehltage der letzten 3 Monate</strong>
    </h1>
    <table class="table is-fullwidth is-hoverable is-striped" id="illness-table">
      <thead>
        <tr>
          <th class="has-text-right">von</th>
          <th class="has-text-right">bis</th>
          <th class="has-text-right">Tage</th>
          <th></th>
        </tr>
      </thead>
      <tbody>';

    foreach ($illDays as $dataset) {
        echo '
        <tr data-start="' . $dataset['start'] . '">
          <td class="has-text-right">' . date('d.m.Y', $dataset['start']) . '</td>
          <td class="has-text-right">' . date('d.m.Y', $dataset['end']) . '</td>
          <td class="has-text-right">' . ($dataset['days'] * -1) . '</td>
          <td class="has-text-right"><button class="button is-small is-danger illness-delete-btn" data-start="' . $dataset['start'] . '"><span class="icon is-small"><i class="fas fa-trash-alt"></i></span> <span>entfernen</span></button></td>
        </tr>';
    }

    echo '</tbody>
    </table>

  <hr>
  ';

}