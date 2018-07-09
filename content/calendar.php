<div id="calendar" class="m-t-lg m-b-lg m-l-lg m-r-lg">

  <div class="level">

    <div class="level-item level-left">
      <div class="field">
        <div class="control">
          <label for="vacation_start" class="label heading">Startdatum </label>
          <input name="vacation_start" type="date" class="input" required>
        </div>
      </div>
    </div>

    <div class="level-item level-right">
      <div class="field">
        <div class="control">
          <label for="vacation_end" class="label heading">Enddatum </label>
          <input name="vacation_end" type="date" class="input" required>
        </div>
      </div>
    </div>

  </div>

  <div id="calendar-container">
  <?php
    require 'api/calendar.php';
  ?>
  </div>
</div>