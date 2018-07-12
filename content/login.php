<div class="m-t-lg m-b-lg m-l-lg m-r-lg">

  <form method="POST" action="api/loginHandler.php">
    <div class="field">
      <label class="label">Personalnummer</label>
      <div class="control has-icons-left">
        <input class="input" type="number" placeholder="Personalnummer" name="personalnummer" required autofocus>
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>

        <?php

        if (isset($_GET['loginError'])) {
            echo '
            <p class="help is-danger">Personalnummer existiert nicht. Zur Neuanlegung bitte bei Abteilungsleiter melden.</p>';
        }

        ?>

    </div>

    <div class="field">
      <div class="control">
        <button class="button is-link">Login</button>
      </div>
    </div>
  </form>
</div>