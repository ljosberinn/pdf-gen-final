<?php

 /**
  * Core file
  *
  * Whole page follows:
  * PHP: PEAR coding standards (line length exempted)
  * JS: ES6
  * Indentation: 2 spaces, single-quotes
  *
  * PHP version 7.2
  *
  * @category  Index
  * @package   Index
  * @author    Gerrit Alex <admin@gerritalex.de>
  * @copyright 2016-2018 Gerrit Alex
  * @license   MIT (https://de.wikipedia.org/wiki/MIT-Lizenz)
  * @link      https://gerritalex.de/tzfinal
  */


require 'api/functions.php';

setHeaders();

session_start();
setlocale(LC_TIME, 'de_DE');

if (isset($_GET['logout']) && !empty($_SESSION['personalnummer'])) {
    session_destroy();
    header('Location: index.php');
}

?>

<!DOCTYPE html>
<html lang="de">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Hello Bulma!</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.0/css/bulma.min.css"/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/timepicker@1.11.12/jquery.timepicker.min.css">
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/timepicker@1.11.12/jquery.timepicker.min.js"></script>


    <?php

      $localFiles = [
        'bulma.helper' => 'css',
        'custom' => 'css',
        'jquery-ui' => 'css',
        'jquery-ui' => 'js',
        'jquery-ui.theme' => 'css',
        'jquery-ui.structure' => 'css',
      ];

      appendFiles($localFiles);

    ?>

  <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
</head>

<body>

    <?php

    $coreTags = [
      'header' => '',
      'main' => 'container',
      'footer' => 'footer has-text-centered',
    ];

    foreach ($coreTags as $tag => $class) {

        if (!empty($class)) {
            $class = 'class="' .$class. '"';
        } else {
            $class = '';
        }

        echo '
        <' .$tag. ' ' .$class. '>';

        include 'content/' .$tag. '.php';

        echo '
        </' .$tag. '>';
    }

    $lateScripts = [
      'stable' => 'js',
      'development' => 'js',
    ];

    appendFiles($lateScripts);

    ?>

</body>

</html>