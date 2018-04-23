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

      <div class="level-item">
        <span>Datum </span>
          <div class="field">
            <div class="control">
              <input id="datepicker" name="datum" class="input" />
            </div>
          </div>
      </div>

    </div>

    <table class="table is-striped is-hoverable is-fullwidth" id="creation-table">
      <thead>
        <tr>
            <?php

            foreach ($tableColumns as $th => $classes) {
                if (!empty($classes)) {
                    $class = 'class="' .$classes. '"';
                } else {
                    $class = "";
                }

                echo '
                <th ' .$class. '>' .$th. '</th>';
            }

            ?>
        </tr>
      </thead>
      <tbody id="creation-tbody">

        <?php

        for ($i = 1; $i <= 10; $i += 1) {

            echo '
        <tr>
          <td data-label="' .$tableColumnKeys[0]. '" title="' .$tableColumnKeys[0]. '">
            <div class="field">
              <div class="control">
                <input id="' .$tableColumnKeys_lowerCase[0]. '-' .$i. '" name="' .$tableColumnKeys_lowerCase[0]. '-' .$i. '" min="0" pattern="^(?!0+$)\d+$" class="input" list="kostenstelle" type="number" placeholder="' .$i. '" />
              </div>
            </div>
          </td>
          <td data-label="' .$tableColumnKeys[1]. '" title="' .$tableColumnKeys[1]. '">
            <div class="field">
              <div class="control">
                <input id="' .$tableColumnKeys_lowerCase[1]. '-' .$i. '" name="' .$tableColumnKeys_lowerCase[1]. '-' .$i. '" class="input" type="number" min="0" pattern="^(?!0+$)\d+$" />
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
                <input id="' .$tableColumnKeys_lowerCase[3]. '-' .$i. '" name="' .$tableColumnKeys_lowerCase[3]. '-' .$i. '" class="input" list="leistungsart" min="0" type="number"  pattern="^(?!0+$)\d+$" />
              </div>
            </div>
          </td>
          <td data-label="' .$tableColumnKeys[4]. '" title="' .$tableColumnKeys[4]. '">
            <div class="field">
              <div class="control">
                <input id="' .$tableColumnKeys_lowerCase[4]. '-' .$i. '" name="' .$tableColumnKeys_lowerCase[4]. '-' .$i. '" class="input" type="number" min="0" pattern="^(?!0+$)\d+$"  />
              </div>
            </div>
          </td>
          <td data-label="' .$tableColumnKeys[5]. '" title="' .$tableColumnKeys[5]. '">
            <div class="field">
              <div class="control">
                <input id="' .$tableColumnKeys_lowerCase[5]. '-' .$i. '" name="' .$tableColumnKeys_lowerCase[5]. '-' .$i. '" class="input" type="number" min="0" pattern="^(?!0+$)\d+$" />
              </div>
            </div>
          </td>
          <td data-label="' .$tableColumnKeys[6]. '" title="' .$tableColumnKeys[6]. '">
            <div class="field">
              <div class="control">
                <input id="' .$tableColumnKeys_lowerCase[6]. '-' .$i. '" name="' .$tableColumnKeys_lowerCase[6]. '-' .$i. '" class="input" type="number" min="0" pattern="^(?!0+$)\d+$" />
              </div>
            </div>
          </td>
        </tr>
        ';

        }

        ?>

      </tbody>
      <tfoot>
        <tr>
          <td colspan="4" class="has-text-centered">
            <button type="button" class="button is-warning" id="add-tr">Weitere Zeile hinzufügen</button>
          </td>
          <td>
            <div class="field">
              <div class="control">
                <input class="input" type="number" id="tagessumme" readonly placeholder="Tagessumme" />
              </div>
            </div>
          </td>
          <td colspan="2">
            <input class="input" type="text" id="arbeitszeit" readonly value="von <?php echo $_SESSION['arbeitszeit']; ?>" />
          </td>
        </tr>
        <tr>
          <td colspan="7" class="has-text-centered">
            <button type="button" class="button is-danger" id="remove-contents">
              <span class="icon is-small">
                <i class="fas fa-eraser"></i>
              </span>
              <span>Zeilen leeren</span>
            </button>
            <button name="later" class="button is-info">
              <span class="icon is-small">
                <i class="far fa-clock"></i>
              </span>
              <span>Für später speichern</span>
            </button>
            <button name="now" class="button is-success">
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