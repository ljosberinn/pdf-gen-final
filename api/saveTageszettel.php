<?php

if (isset($_POST)) {

    if (isset($_POST['now'])) {
      $table = '_perm';
    } else if (isset($_POST['later'])) {
      $table = '_temp';
    }


}

?>