<?php

ob_start();

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

require 'api/db.php';
require 'api/functions.php';

setHeaders();

$conn = new mysqli($host, $user, $password, $database);
$conn->set_charset('utf8');

$kostenstellen = returnConstants($conn, 'kostenstelle');
$leistungsarten = returnConstants($conn, 'leistungsart');

session_start();

if (isset($_GET['logout']) && !empty($_SESSION['personalnummer'])) {
    session_destroy();
    header('Location: index.php');
}

ob_end_flush();

?>

<!DOCTYPE html>
<html lang="de">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Hello Bulma!</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.0/css/bulma.min.css"/>
  <script src="https://unpkg.com/sweetalert2@7.19.3/dist/sweetalert2.all.min.js"></script>

    <?php

      $localFiles = [
        'bulma.helper' => 'css',
        'custom' => 'css',
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

        echo "<$tag $class>";

        include 'content/' .$tag. '.php';

        echo "</$tag>";
    }

    $lateScripts = [
      'bundle' => 'js',
    ];

    appendFiles($lateScripts);

    ?>

</body>

</html>