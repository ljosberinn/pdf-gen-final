<?php

ob_start();

/**
 * Core file
 *
 * Whole page follows:
 * PHP: PSR2 coding standards (indentation excluded)
 * JS: ES6+
 * Indentation: 2 spaces, single-quotes
 *
 * PHP version 5.6
 *
 * @category  Index
 * @package   Index
 * @author    Gerrit Alex <admin@gerritalex.de>
 * @copyright 2016-2018 Gerrit Alex
 * @license   MIT (https://de.wikipedia.org/wiki/MIT-Lizenz)
 * @link      https://github.com/ljosberinn/pdf-gen-final
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
  <title>PDF-Generator & Urlaubsverwaltung</title>

<?php

$localFiles = [
    'custom' => 'css',

    'bundle' => 'js',
];

appendFiles($localFiles);

?>


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
        $class = 'class="' . $class . '"';
    } else {
        $class = '';
    }

    echo "<$tag $class>";

    include 'content/' . $tag . '.php';

    echo "</$tag>";
}

?>

</body>

</html>