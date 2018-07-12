<div id="options" class="m-t-lg m-b-lg m-l-lg m-r-lg">

  <!-- Urlaubstage -->
  <?php require 'options/vacation.php'; ?>

  <hr>

  <!-- Überstunden -->
  <?php require 'options/overhours.php'; ?>

  <hr>

  <!-- Signatur -->
  <?php require 'options/signatur.php';

    if ($_SESSION['admin']) {
          echo '<hr>';
          include_once 'options/adminOptions.php';
    }

  ?>
</div>