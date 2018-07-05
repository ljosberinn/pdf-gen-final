<div id="options" class="m-t-lg m-b-lg m-l-lg m-r-lg">

  <!-- Urlaubstage -->
  <?php require 'options/urlaub.php'; ?>

  <hr>

  <!-- Überstunden -->
  <?php require 'options/ueberstunden.php'; ?>

  <hr>

  <!-- Signatur -->
  <?php require 'options/signatur.php';


  if ($_SESSION['personalnummer'] == 1090) {
      echo '<hr>';
      include_once 'options/adminOptions.php';
  }

  ?>
</div>