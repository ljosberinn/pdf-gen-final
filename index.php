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
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

    <?php

      $localFiles = [
        'bulma.helper' => 'css',
        'custom' => 'css',
        'jquery-ui' => 'css',
        'jquery-ui' => 'js',
        'jquery-ui.theme' => 'css',
      ];

      appendFiles($localFiles);

    ?>

  <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
</head>

<body>

    <?php

    $coreTags = [
      'header' => [
        'class' => '',
      ],
      'main' => [
        'class' => 'container',
      ],
      'footer' => [
        'class' => 'footer',
      ],
    ];

    foreach ($coreTags as $tag => $specifications) {

        if (!empty($specifications['class'])) {
            $class = 'class="' .$specifications['class']. '"';
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
      'custom' => 'js',
    ];

    appendFiles($lateScripts);

    ?>

</body>

</html>