<form method="POST" action="api/saveOptions.php">
  <div class="control">
    <div class="columns">
      <div class="column">
        <input class="input" type="number" name="urlaubstage" value="<?php echo $_SESSION['urlaubstage']; ?>" />
        <p class="help"><strong>Gesamtzahl</strong> jährlicher Urlaubstage
      </div>
      <div class="column">
        <button class="button is-primary">Sichern</button>
      </div>
    </div>
  </div>
</form>