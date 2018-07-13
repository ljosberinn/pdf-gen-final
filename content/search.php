<div id="search" class="m-t-lg m-b-lg m-l-lg m-r-lg">

  <h1>
    <strong>Suche</strong>
  </h1>
  <div class="columns">
    <div class="column">
      <div class="select">
        <select id="search-type">
          <option disabled>Suche in...</option>
          <option value="auftragsnummer">Auftragsnummer</option>
          <option value="kunde">Kunde</option>
        </select>
      </div>
    </div>
    <div class="column">
      <div class="field">
        <p class="control has-icons-right">
          <input class="input" type="text" placeholder="..." id="search-value">
          <span class="icon is-small is-right" id="search-icons">
            <i class="fas fa-spinner has-text-info"></i>
            <i class="fas fa-check has-text-success"></i>
            <i class="fas fa-times has-text-danger"></i>
          </span>
        </p>
      </div>
    </div>
  </div>

  <hr>

  <table class="table is-hoverable is-striped is-fullwidth" id="search-table">
    <thead>
      <th>berabeitet von</th>
      <th>bearbeitet am</th>
      <th>Auftragsnummer</th>
      <th>Kunde</th>
      <th>Leistungsart</th>
      <th>Minuten</th>
    </thead>
    <tbody></tbody>
    <tfoot></tfoot>
  </table>

</div>