

<?php

$getHolidaysStmt = "SELECT `start`, `end`, `days` FROM `vacation` WHERE `person` = 0 AND `start` >= " . (time('now') - 86400);
$getHolidays = $conn->query($getHolidaysStmt);

$holidays = [];

if ($getHolidays->num_rows > 0) {
    while ($data = $getHolidays->fetch_assoc()) {
        if ($data['days'] > 0) {
            array_push(
                $holidays, [
                    'start' => $data['start'],
                    'end' => $data['end'],
                    'days' => $data['days'],
                ]
            );
        }
    }
}

if (!empty($holidays)) {

    echo '
    <h1>
      <strong>Kommende Feiertage</strong>
    </h1>
    <table class="table is-fullwidth is-hoverable is-striped" id="holidays-table">
      <thead>
        <tr>
          <th class="has-text-right">von</th>
          <th class="has-text-right">bis</th>
          <th class="has-text-right">Tage</th>
          <th></th>
        </tr>
      </thead>
      <tbody>';

    foreach ($holidays as $dataset) {
        echo '
        <tr data-start="' . $dataset['start'] . '">
          <td class="has-text-right">' . date('d.m.Y', $dataset['start']) . '</td>
          <td class="has-text-right">' . date('d.m.Y', $dataset['end']) . '</td>
          <td class="has-text-right">' . $dataset['days'] . '</td>
          <td class="has-text-right"><button class="button is-small is-danger holiday-delete-btn" data-start="' . $dataset['start'] . '"><span class="icon is-small"><i class="fas fa-trash-alt"></i></span> <span>entfernen</span></button></td>
        </tr>';
    }

    echo '</tbody>
    </table>
  ';

}