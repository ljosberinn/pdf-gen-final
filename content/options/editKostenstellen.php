<div class="column">
  <h2><strong>Kostenstellen hinzufügen</strong></h2>

  <form method="POST" action="api/options/addKostenstelle.php">
    <div class="columns">
      <div class="column">
        <input type="number" class="input" placeholder="Nummer" required />
      </div>
      <div class="column">
        <input type="text" class="input" placeholder="Beschreibung" required />
      </div>
    </div>
    <button disabled class="button is-primary is-small">Kostenstelle hinzufügen</button>
  </form>

  <hr>

  <h2><strong>Kostenstellen bearbeiten</strong></h2>

  <form method="POST" action="api/options/editKostenstelle.php">
    <div class="columns">
      <div class="column">
          <select class="select" id="Kostenstellen-edit">
            <option selected disabled>zum bearbeiten auswählen</option>
            <?php returnKostenstellen();?>
          </select>
      </div>
    </div>
    <button disabled class="button is-primary is-small">Kostenstelle sichern</button>
  </form>
</div>