<div class="columns">

<?php

$arr = ['kostenstelle', 'leistungsart'];
$plural = ['Kostenstellen', 'Leistungsarten'];

foreach ($arr as $option) {
    $i = array_search($option, $arr);

    echo '
    <!-- ' .$plural[$i]. ' -->
    <div class="column">
      <h2><strong>' .$plural[$i]. ' hinzufügen</strong></h2>

      <div class="columns">
        <div class="column">
          <input type="number" class="input" placeholder="Nummer" id="' .$option. '-number-add" />
        </div>
        <div class="column">
          <input type="text" class="input" placeholder="Beschreibung" id="' .$option. '-desc-add" />
        </div>
        <div class="column">
          <button disabled id="' .$option. '-btn-add" class="button is-success is-small">' .ucfirst($option). ' hinzufügen</button>
        </div>
      </div>

      <hr>

      <div class="columns">
        <div class="column">
          <select class="select" id="' .$option. '-select">
            <option selected disabled>auswählen</option>';

    $option === 'kostenstelle' ? returnKostenstellen() : returnLeistungsarten();

    echo '</select>
        </div>
        <div class="column">
          <button disabled class="button is-danger is-small" id="' . $option . '-btn-delete">' .ucfirst($option). ' löschen</button>
        </div>
      </div>

    </div>';
}

?>
</div>