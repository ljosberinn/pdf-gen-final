<form method="POST" action="api/saveOptions.php">
    <div class="columns">
      <div class="column">
        <div class="file has-name is-fullwidth">
          <label class="file-label">
            <input class="file-input" type="file" name="signatur" id="signatur" accept="image/png, image/jpeg">
            <span class="file-cta">
              <span class="file-icon"><i class="fas fa-upload"></i></span>
              <span class="file-label">Signatur hochladen...</span>
            </span>
            <span class="file-name"></span>
          </label>
        </div>
        <p class="help">Nur PNG oder JPG/JPEG werden akzeptiert!</p>
    </div>
  </div>
  <button disabled class="button is-primary" id="signatur-btn">Signatur hochladen</button>
</form>
