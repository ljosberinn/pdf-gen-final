<div class="columns">
  <h1 class="column">
    <strong>Urlaubsverwaltung</strong>
  </h1>
</div>

<div class="level">

    <div class="level-item level">
      <div class="field">
        <div class="control">
          <label for="vacation-start" class="label heading">Startdatum </label>
          <input id="vacation-start" type="date" class="input" required>
        </div>
      </div>
    </div>

    <div class="level-item level">
      <div class="field">
        <div class="control">
          <label for="vacation-end" class="label heading">Enddatum </label>
          <input id="vacation-end" type="date" class="input" required>
        </div>
      </div>
    </div>

    <div class="level-item level">
      <div class="field">
        <div class="control">
          <label for="vacation-days" class="label heading">Anzahl an Tagen </label>
          <input id="vacation-days" type="number" class="input" required>
          <p class="help">bei eingeschlossenen Feiertagen korrigieren!</p>
        </div>
      </div>
    </div>

    <div class="level-item level">
      <div class="field">
        <div class="control">
          <button class="button is-success" disabled id="vacation-btn">
              <span class="icon is-small">
                <i class="fas fa-check"></i>
              </span>
              <span>eintragen</span>
            </button>
        </div>
      </div>
    </div>

  </div>

  <hr>