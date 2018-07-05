<form method="POST" action="api/saveOptions.php">
  <div class="columns">
    <div class="control column">
      <label>
        <strong>Gesamtzahl</strong> jährlicher Urlaubstage
        <input class="input" type="number" name="urlaubstage" value="<?php echo $_SESSION['urlaubstage']; ?>" />
      </label>
    </div>

    <div class="control column">
      <label>
        <strong>Bisher verbrauchte</strong> Urlaubstage
        <input class="input" type="number" name="remaining_urlaubstage" value="<?php echo $_SESSION['remaining_urlaubstage']; ?>"
        />
      </label>
    </div>
  </div>
  <button class="button is-primary">Urlaubsbezogene Daten sichern</button>
</form>