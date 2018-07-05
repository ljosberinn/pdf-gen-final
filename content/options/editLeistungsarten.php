<div class="column">
  <h2><strong>Leistungsarten hinzufügen</strong></h2>

  <div class="columns">
    <div class="column">
      <input type="number" class="input" placeholder="Nummer" required id="leistungsart-number-add" />
    </div>
    <div class="column">
      <input type="text" class="input" placeholder="Beschreibung" required id="leistungsart-desc-add" />
    </div>
  </div>
  <button disabled class="button is-success is-small" id="leistungsart-btn-add" >Leistungsart hinzufügen</button>

  <hr>

  <h2><strong>Leistungsarten bearbeiten</strong></h2>

  <div class="columns">
    <div class="column">
      <select class="select" id="leistungsart-edit">
        <option selected disabled>zum bearbeiten auswählen</option>
        <?php returnLeistungsarten();?>
      </select>
    </div>
    <div class="column">
      <input type="hidden" class="input is-small" placeholder="Nummer" name="leistungsart-edit-0" id="leistungsart-edit-0"/>
    </div>
    <div class="column">
      <input type="hidden" class="input is-small" placeholder="Beschreibung" name="leistungsart-edit-1" id="leistungsart-edit-1"/>
    </div>
  </div>
  <button disabled class="button is-danger is-small" id="leistungsart-btn-delete">Leistungsart löschen</button>
  <button disabled class="button is-success is-small" id="leistungsart-btn-edit">Leistungsart sichern</button>
</div>