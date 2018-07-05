<div class="column">
  <h2><strong>Kostenstellen hinzufügen</strong></h2>

  <div class="columns">
    <div class="column">
      <input type="number" class="input" placeholder="Nummer" required id="kostenstelle-number-add" />
    </div>
    <div class="column">
      <input type="text" class="input" placeholder="Beschreibung" required id="kostenstelle-desc-add" />
    </div>
  </div>
  <button disabled id="kostenstelle-btn-add" class="button is-success is-small">Kostenstelle hinzufügen</button>

  <hr>

  <h2><strong>Kostenstellen bearbeiten</strong></h2>

  <div class="columns">
    <div class="column">
      <select class="select" id="kostenstelle-edit">
        <option selected disabled>zum bearbeiten auswählen</option>
        <?php returnKostenstellen();?>
      </select>
    </div>
    <div class="column">
      <input type="hidden" class="input is-small" placeholder="Nummer" name="kostenstelle-edit-1" id="kostenstelle-edit-0"/>
    </div>
    <div class="column">
      <input type="hidden" class="input is-small" placeholder="Beschreibung" name="kostenstelle-edit-1" id="kostenstelle-edit-1"/>
    </div>
  </div>
  <button disabled class="button is-danger is-small" id="kostenstelle-btn-delete">Kostenstelle löschen</button>
  <button disabled class="button is-success is-small" id="kostenstelle-btn-edit">Kostenstelle sichern</button>
</div>