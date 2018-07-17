

<?php

$getYourVacationStmt = "SELECT `start`, `end`, `days` FROM `vacation` WHERE `person` = " . $_SESSION['personalnummer'] . " AND `start` >= " . (time('now') - 86400);
$getYourVacation = $conn->query($getYourVacationStmt);

$vacation = [];

if ($getYourVacation->num_rows > 0) {
    while ($data = $getYourVacation->fetch_assoc()) {
        array_push(
            $vacation, [
                'start' => $data['start'],
                'end' => $data['end'],
                'days' => $data['days'],
            ]
        );
    }
}

if (!empty($vacation)) {

    echo '
    <h1>
      <strong>Vorgemerkter Urlaub</strong>
    </h1>
    <table class="table is-fullwidth is-hoverable is-striped" id="vacation-table">
      <thead>
        <tr>
          <th class="has-text-right">von</th>
          <th class="has-text-right">bis</th>
          <th class="has-text-right">Tage</th>
          <th></th>
        </tr>
      </thead>
      <tbody>';

    foreach ($vacation as $dataset) {
        echo '
        <tr data-start="' . $dataset['start'] . '">
          <td class="has-text-right">' . date('d.m.Y', $dataset['start']) . '</td>
          <td class="has-text-right">' . date('d.m.Y', $dataset['end']) . '</td>
          <td class="has-text-right">' . $dataset['days'] . '</td>
          <td class="has-text-right"><button class="button is-small is-danger vacation-delete-btn" data-start="' . $dataset['start'] . '"><span class="icon is-small"><i class="fas fa-trash-alt"></i></span> <span>entfernen</span></button></td>
        </tr>';
    }

    echo '</tbody>
    </table>

  <hr>
  ';

}