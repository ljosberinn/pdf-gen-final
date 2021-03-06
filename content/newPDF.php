<?php

$tableColumns = [
    'Kostenstelle' => '',
    'Auftragsnummer' => '',
    'Kunde' => '',
    'Leistungsart' => '',
    'Minuten' => '',
    'Anzahl' => '',
    'Materialnummer' => '',
];

$tableColumnKeys = array_keys($tableColumns);
$tableColumnKeys_lowerCase = [];

foreach ($tableColumnKeys as $tableColumnKey) {
    array_push($tableColumnKeys_lowerCase, strtolower($tableColumnKey));
}

?>


<div id="new-pdf" class="m-t-lg m-b-lg m-l-lg m-r-lg">

  <form method="POST" action="api/saveTageszettel.php">

    <div class="level">

      <div class="level-item level-left">
        <div class="field">
          <div class="control">
            <label for="datum" class="label heading">Datum </label>
            <input id="datum" name="datum" type="date" class="input" required value="<?php echo date('Y-m-d', time('now')); ?>" />
          </div>
        </div>
      </div>

      <div class="level-item level-left">
        <div class="field">
          <div class="control">
            <label for="von" class="label heading">Von </label>
            <input id="von" name="von" class="input" required placeholder="08:00" value="<?php echo $_SESSION['startAvg']; ?>" />
          </div>
        </div>
      </div>

      <div class="level-item level-left">
        <div class="field">
          <div class="control">
            <label for="bis" class="label heading">Bis </label>
            <input id="bis" name="bis" class="input" required placeholder="16:30" value="<?php echo $_SESSION['endAvg']; ?>" />
          </div>
        </div>
      </div>

      <div class="level-item level-left">
        <div class="field">
          <div class="control">
            <label for="außer-haus" class="label heading">Außer Haus </label>
            <input id="außer-haus" name="außer-haus" class="input" type="number" />
          </div>
        </div>
      </div>

      <div class="level-item level-right">
        <label class="checkbox">
          <input type="checkbox" name="frühstückspause" id="frühstückspause" <?php echo $_SESSION['arbeitszeit'] > 360 ? 'checked' : ''; ?>>
          Frühstückspause
        </label>
      </div>

      <div class="level-item level-right">
        <label class="checkbox">
          <input type="checkbox" name="mittagspause" id="mittagspause" <?php echo $_SESSION['arbeitszeit'] > 360 ? 'checked' : ''; ?>>
          Mittagspause
        </label>
      </div>

    </div>

    <table class="table is-striped is-hoverable is-fullwidth" id="creation-table">
      <thead>
        <tr>
            <?php

foreach ($tableColumns as $th => $classes) {
    $class = !empty($classes) ? 'class="' . $classes . '"' : "";

    echo '<th ' . $class . '>' . $th . '</th>';
}

?>
        </tr>
      </thead>
      <tbody id="creation-tbody">

        <?php

for ($i = 1; $i <= 5; $i += 1) {

    echo '
        <tr>
          <td data-label="' . $tableColumnKeys[0] . '" title="' . $tableColumnKeys[0] . '">
            <div class="field">
              <div class="control">
                <input id="' . $tableColumnKeys_lowerCase[0] . '-' . $i . '" name="' . $tableColumnKeys_lowerCase[0] . '-' . $i . '" class="input" list="kostenstelle" placeholder="' . $i . '" />
              </div>
            </div>
          </td>
          <td data-label="' . $tableColumnKeys[1] . '" title="' . $tableColumnKeys[1] . '">
            <div class="field">
              <div class="control">
                <input id="' . $tableColumnKeys_lowerCase[1] . '-' . $i . '" name="' . $tableColumnKeys_lowerCase[1] . '-' . $i . '" class="input" type="number" min="0" />
              </div>
            </div>
          </td>
          <td data-label="' . $tableColumnKeys[2] . '" title="' . $tableColumnKeys[2] . '">
            <div class="field">
              <div class="control">
                <input id="' . $tableColumnKeys_lowerCase[2] . '-' . $i . '" name="' . $tableColumnKeys_lowerCase[2] . '-' . $i . '" class="input" type="text" />
              </div>
            </div>
          </td>
          <td data-label="' . $tableColumnKeys[3] . '" title="' . $tableColumnKeys[3] . '">
            <div class="field">
              <div class="control">
                <input id="' . $tableColumnKeys_lowerCase[3] . '-' . $i . '" name="' . $tableColumnKeys_lowerCase[3] . '-' . $i . '" class="input" list="leistungsart" />
              </div>
            </div>
          </td>
          <td data-label="' . $tableColumnKeys[4] . '" title="' . $tableColumnKeys[4] . '">
            <div class="field">
              <div class="control">
                <input id="' . $tableColumnKeys_lowerCase[4] . '-' . $i . '" name="' . $tableColumnKeys_lowerCase[4] . '-' . $i . '" class="input" type="number" min="0" />
              </div>
            </div>
          </td>
          <td data-label="' . $tableColumnKeys[5] . '" title="' . $tableColumnKeys[5] . '">
            <div class="field">
              <div class="control">
                <input id="' . $tableColumnKeys_lowerCase[5] . '-' . $i . '" name="' . $tableColumnKeys_lowerCase[5] . '-' . $i . '" class="input" type="number" min="0" />
              </div>
            </div>
          </td>
          <td data-label="' . $tableColumnKeys[6] . '" title="' . $tableColumnKeys[6] . '">
            <div class="field">
              <div class="control">
                <input id="' . $tableColumnKeys_lowerCase[6] . '-' . $i . '" name="' . $tableColumnKeys_lowerCase[6] . '-' . $i . '" class="input" type="number" min="0" />
              </div>
            </div>
          </td>
        </tr>
        ';

}

?>

      </tbody>
      <tfoot>
        <tr id="tr-890">
          <td>
            <div class="field">
              <div class="control">
                <input id="kostenstelle-890" name="kostenstelle-890" class="input" readonly type="number" value="890" />
              </div>
            </div>
          </td>
          <td colspan="2"></td>
          <td>
            <div class="field">
              <div class="control">
                <input id="leistungsart-890" name="leistungsart-890" class="input" readonly type="text" value="998" />
              </div>
            </div>
          </td>
          <td>
            <div class="field">
              <div class="control">
                <input id="minuten-890" name="minuten-890" class="input" min="0" type="number"  />
              </div>
            </div>
          </td>
          <td colspan="2"></td>
        </tr>
        <tr>
          <td colspan="3" class="has-text-centered">
            <button type="button" class="button is-warning" id="add-tr">Weitere Zeile hinzufügen</button>
          </td>
          <td>
            <div class="field">
              <div class="control">
                <input class="input has-text-right" type="text" id="tagessumme-helper" readonly value="Tagessumme:" />
              </div>
            </div>
          </td>
          <td>
            <div class="field">
              <div class="control">
                <input class="input" type="number" id="tagessumme" readonly placeholder="<?php echo $_SESSION['arbeitszeit']; ?>" />
              </div>
            </div>
          </td>
          <td colspan="2">
            <input class="input" type="text" id="arbeitszeit" data-grundarbeitszeit="<?php echo $_SESSION['arbeitszeit']; ?>" readonly value="von <?php echo $_SESSION['arbeitszeit']; ?>" />
          </td>
        </tr>
        <tr>
          <td colspan="7" class="has-text-centered">
            <button type="button" class="button is-danger" id="remove-contents" disabled>
              <span class="icon is-small">
                <i class="fas fa-eraser"></i>
              </span>
              <span>Zeilen leeren</span>
            </button>
            <button name="later" class="button is-info" id="later">
              <span class="icon is-small">
                <i class="far fa-clock"></i>
              </span>
              <span>Für später speichern</span>
            </button>
            <button name="now" class="button is-success" id="now">
              <span class="icon is-small">
                <i class="fas fa-check"></i>
              </span>
              <span>Jetzt erstellen</span>
            </button>
          </td>
        </tr>
      </tfoot>
    </table>

    <datalist id="kostenstelle">
        <?php

foreach ($kostenstellen as $kostenstelle) {
    echo $kostenstelle;
}

?>
    </datalist>
    <datalist id="leistungsart">
        <?php

foreach ($leistungsarten as $leistungsart) {
    echo $leistungsart;
}

?>
    </datalist>
  </form>

</div>