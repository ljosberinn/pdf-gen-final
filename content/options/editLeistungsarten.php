<div class="column">
  <h2><strong>Leistungsarten hinzufügen</strong></h2>

  <form method="POST" action="api/options/addLeistungsart.php">
    <div class="columns">
      <div class="column">
        <input type="number" class="input" placeholder="Nummer" required />
      </div>
      <div class="column">
        <input type="text" class="input" placeholder="Beschreibung" required />
      </div>
    </div>
    <button disabled class="button is-primary is-small">Leistungsart hinzufügen</button>
  </form>

  <hr>

  <h2><strong>Leistungsarten bearbeiten</strong></h2>

  <form method="POST" action="api/options/editLeistungsart.php">
    <div class="columns">
      <div class="column">
          <select class="select" id="leistungsarten-edit">
            <option selected disabled>zum bearbeiten auswählen</option>
            <?php returnLeistungsarten();?>
          </select>
      </div>
    </div>
    <button disabled class="button is-primary is-small">Leistungsart sichern</button>
  </form>
</div>