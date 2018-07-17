<form method="POST" action="api/options/signatur.php" enctype="multipart/form-data">
  <input type="hidden" name="MAX_FILE_SITE" value="1048576" />
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
        <p class="help">Nur PNG oder JPG/JPEG werden akzeptiert, maximale Dateigröße 1 MB! Seitenverhältnis 3.1:1</p>
    </div>
  </div>
  <button disabled class="button is-primary" id="signatur-btn">Signatur hochladen</button>
</form>

<?php

if ($_SESSION['signatur']) {
    echo '
    <div class="level">
      <div class="level-item">
        <table class="table">
          <thead>
            <tr>
              <th class="has-text-centered">derzeitige Signatur</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="has-text-centered"><img src="' .$_SESSION['signatur']. '" class="image" id="signatur-img"></td>
            </tr>
            <tr>
              <td class="has-text-centered">zum löschen anklicken oder mit neuem Bild überschreiben</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>';
}