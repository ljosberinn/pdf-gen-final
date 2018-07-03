<div id="options" class="m-t-lg m-b-lg m-l-lg m-r-lg">

  <form method="POST" action="api/saveOptions.php">
    <div class="control">
      <label> <strong>Gesamtzahl</strong> jährlicher Urlaubstage
        <input class="input" type="number" name="urlaubstage" value="<?php echo $_SESSION['urlaubstage']; ?>" />
      </label>
    </div>

    <div class="control">
      <label> <strong>Bisher verbrauchte</strong> Urlaubstage
        <input class="input" type="number" name="remaining_urlaubstage" value="<?php echo $_SESSION['remaining_urlaubstage']; ?>" />
      </label>
    </div>
    <button class="button is-primary">Urlaubsbezogene Daten sichern</button>
  </form>

  <hr>

  <form method="POST" action="api/saveOptions.php">
    <div class="control">
        <label> Überstunden bitte in Minuten angeben!
          <input class="input" type="number" name="überstunden" value="<?php echo $_SESSION['überminuten']; ?>" />
        </label>
        <button class="button is-primary">Überstunden festlegen</button>
    </div>
  </form>

  <hr>

  <form method="POST" action="api/saveOptions.php">
  <label for="signatur">Nur PNG oder JPG/JPEG werden akzeptiert!</label>
    <div class="file has-name is-fullwidth">
      <label class="file-label">
        <input class="file-input" type="file" name="signatur" id="signatur" accept="image/png, image/jpeg">
        <span class="file-cta">
          <span class="file-icon">
            <i class="fas fa-upload"></i>
          </span>
          <span class="file-label">
            Signatur hochladen...
          </span>
        </span>
        <span class="file-name"></span>
      </label>

    </div>
  </form>
  <!--
  // admin: <br>
  kostenstelle<br>
  leitungssart<br>
  neuer nutzer -->
</div>