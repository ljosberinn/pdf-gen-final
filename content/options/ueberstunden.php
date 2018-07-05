<form method="POST" action="api/saveOptions.php">
  <div class="control">
    <div class="columns">
      <div class="column">
        <input class="input" type="number" name="überstunden" id="überminuten" value="<?php echo $_SESSION['überminuten']; ?>" />
        <p class="help">Überstunden bitte in Minuten angeben!</p>
      </div>
    </div>
    <button disabled class="button is-primary" id="überminuten-btn" >Überstunden festlegen</button>
  </div>
</form>