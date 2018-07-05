<form method="POST" action="api/saveOptions.php">
  <div class="control">
    <div class="columns">
      <label class="column"> Überstunden bitte in Minuten angeben!
        <input class="input" type="number" name="überstunden" value="<?php echo $_SESSION['überminuten']; ?>" />
      </label>
    </div>
    <button disabled class="button is-primary">Überstunden festlegen</button>
  </div>
</form>