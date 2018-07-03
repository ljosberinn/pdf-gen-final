<?php

$tableColumns = [
  'Kostenstelle'   => '',
  'Auftragsnummer' => '',
  'Kunde'          => '',
  'Leistungsart'   => '',
  'Minuten'        => '',
  'Anzahl'         => '',
  'Materialnummer' => '',
];

$tableColumnKeys = array_keys($tableColumns);
$tableColumnKeys_lowerCase = [];

foreach ($tableColumnKeys as $tableColumnKey) {
    array_push($tableColumnKeys_lowerCase, strtolower($tableColumnKey));
}

$now = new DateTimeImmutable();

?>


<div id="new-pdf" class="m-t-lg m-b-lg m-l-lg m-r-lg">

  <form method="POST" action="api/saveTageszettel.php">

    <div class="level">

      <div class="level-item level-left">
        <div class="field">
          <div class="control">
            <label for="datepicker" class="label heading">Datum </label>
            <input id="datepicker" name="datum" class="input" required list="datelist" value="<?php echo manualDateLocalization($now->format('D, d.m.Y')); ?>"/>
            <datalist id="datelist">
            <?php

            $oneWeekBack = $now->modify('-1 week');

            for ($i = 0; $i < 14; $i += 1) {
                $plusOneDay = $oneWeekBack->modify('+' .$i. ' day')->format('D, d.m.Y');
                echo '<option value="'.manualDateLocalization($plusOneDay).'" />';
            }

            ?>
            </datalist>
          </div>
        </div>
      </div>

      <div class="level-item level-left">
        <div class="field">
          <div class="control">
            <label for="von" class="label heading">Von </label>
            <input id="von" name="von" class="input" required value="<?php echo $_SESSION['startAvg']; ?>" list="von-list" />
            <datalist id="von-list">
            <?php



            ?>
            </datalist>
          </div>
        </div>
      </div>

      <div class="level-item level-left">
        <div class="field">
          <div class="control">
            <label for="bis" class="label heading">Bis </label>
            <input id="bis" name="bis" class="input" required list="bis-list" />
            <datalist id="bis-list">
            <?php

            ?>
            </datalist>
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
          <input type="checkbox" name="frühstückspause" id="frühstückspause" checked>
          Frühstückspause
        </label>
      </div>

      <div class="level-item level-right">
        <label class="checkbox">
          <input type="checkbox" name="mittagspause" id="mittagspause" checked>
          Mittagspause
        </label>
      </div>

    </div>

    <table class="table is-striped is-hoverable is-fullwidth" id="creation-table">
      <thead>
        <tr>
            <?php

            foreach ($tableColumns as $th => $classes) {
                $class = !empty($classes) ? 'class="' .$classes. '"' : "";

                echo '<th ' .$class. '>' .$th. '</th>';
            }

            ?>
        </tr>
      </thead>
      <tbody id="creation-tbody">

        <?php

        for ($i = 1; $i <= 5; $i += 1) {

            echo '
        <tr>
          <td data-label="' .$tableColumnKeys[0]. '" title="' .$tableColumnKeys[0]. '">
            <div class="field">
              <div class="control">
                <input id="' .$tableColumnKeys_lowerCase[0]. '-' .$i. '" name="' .$tableColumnKeys_lowerCase[0]. '-' .$i. '" min="0" class="input" list="kostenstelle" type="number" placeholder="' .$i. '" />
              </div>
            </div>
          </td>
          <td data-label="' .$tableColumnKeys[1]. '" title="' .$tableColumnKeys[1]. '">
            <div class="field">
              <div class="control">
                <input id="' .$tableColumnKeys_lowerCase[1]. '-' .$i. '" name="' .$tableColumnKeys_lowerCase[1]. '-' .$i. '" class="input" type="number" min="0" />
              </div>
            </div>
          </td>
          <td data-label="' .$tableColumnKeys[2]. '" title="' .$tableColumnKeys[2]. '">
            <div class="field">
              <div class="control">
                <input id="' .$tableColumnKeys_lowerCase[2]. '-' .$i. '" name="' .$tableColumnKeys_lowerCase[2]. '-' .$i. '" class="input" type="text" />
              </div>
            </div>
          </td>
          <td data-label="' .$tableColumnKeys[3]. '" title="' .$tableColumnKeys[3]. '">
            <div class="field">
              <div class="control">
                <input id="' .$tableColumnKeys_lowerCase[3]. '-' .$i. '" name="' .$tableColumnKeys_lowerCase[3]. '-' .$i. '" class="input" list="leistungsart" min="0" type="number" />
              </div>
            </div>
          </td>
          <td data-label="' .$tableColumnKeys[4]. '" title="' .$tableColumnKeys[4]. '">
            <div class="field">
              <div class="control">
                <input id="' .$tableColumnKeys_lowerCase[4]. '-' .$i. '" name="' .$tableColumnKeys_lowerCase[4]. '-' .$i. '" class="input" type="number" min="0" />
              </div>
            </div>
          </td>
          <td data-label="' .$tableColumnKeys[5]. '" title="' .$tableColumnKeys[5]. '">
            <div class="field">
              <div class="control">
                <input id="' .$tableColumnKeys_lowerCase[5]. '-' .$i. '" name="' .$tableColumnKeys_lowerCase[5]. '-' .$i. '" class="input" type="number" min="0" />
              </div>
            </div>
          </td>
          <td data-label="' .$tableColumnKeys[6]. '" title="' .$tableColumnKeys[6]. '">
            <div class="field">
              <div class="control">
                <input id="' .$tableColumnKeys_lowerCase[6]. '-' .$i. '" name="' .$tableColumnKeys_lowerCase[6]. '-' .$i. '" class="input" type="number" min="0" />
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
            <input class="input" type="text" id="arbeitszeit" readonly value="von <?php echo $_SESSION['arbeitszeit']; ?>" />
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
            <button name="later" class="button is-info" id="later" disabled>
              <span class="icon is-small">
                <i class="far fa-clock"></i>
              </span>
              <span>Für später speichern</span>
            </button>
            <button name="now" class="button is-success" id="now" disabled>
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

        returnKostenstellen();

        ?>
    </datalist>
    <datalist id="leistungsart">
        <?php

        returnLeistungsarten();

        ?>
    </datalist>
  </form>

</div>