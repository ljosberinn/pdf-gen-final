<?php

 /**
  * Functions.php
  *
  * Contains all PHP-functions
  *
  * PHP version 7.2
  *
  * @category  Functions
  * @package   API/functions.php
  * @author    Gerrit Alex <admin@gerritalex.de>
  * @copyright 2016-2018 Gerrit Alex
  * @license   MIT (https://de.wikipedia.org/wiki/MIT-Lizenz)
  * @link      https://gerritalex.de/tzfinal
  */

/**
 * Defines general security headers preventing sniffing, x-framing and XSS-protection
 *
 * @return header
 */
function setHeaders()
{
    $generalHeaders = [
        "X-Content-Type-Options: nosniff",
        "Strict-Transport-Security: max-age=63072000; includeSubDomains; preload",
        "X-Frame-Options: DENY",
        "X-XSS-Protection: 1; mode=block",
    ];

    foreach ($generalHeaders as $header) {
        header($header);
    }
}

/**
 * Appends scripts to page with $lastModified timestamp, thus always fetching the newest version, preventing caching
 *
 * @method public appendJSFiles
 *
 * @param array $files [$ownJSFiles, relative links to file]
 *
 * @return string [script link]
 */
function appendFiles($files)
{
    foreach ($files as $filename => $type) {

        $link = 'assets/' .$type. '/' .$filename. '.min.' .$type;
        $link .= '?' .filemtime($link);

        if ($type == 'js') {
            echo '
            <script src="' .$link. '"></script>';
        } else if ($type == 'css') {
            echo '
            <link rel="stylesheet" href="' .$link. '" />';
        }
    }
}

/**
 * Appends nav items to nav bar depending on specifications
 *
 * @param [array] $elementArray nav items to be appended
 *
 * @return void
 */
function appendNavItems($elementArray)
{
    foreach ($elementArray as $navText => $specifications) {
        if (($specifications['login']
            && !isset($_SESSION['personalnummer']))
            || (empty($specifications['login'])
            && isset($_SESSION['personalnummer']))
        ) {
            continue;
        }

        if (!empty($specifications['class'])) {
            $class = 'class="' .$specifications['class']. '"';
        } else {
            $class = '';
        }

        if (!empty($specifications['href'])) {
            $href = 'href="' .$specifications['href']. '"';
        } else {
            $href = '';
        }

        if (!empty($specifications['data-target'])) {
            $target = 'data-target="' .$specifications['data-target']. '"';
        } else {
            $target = '';
        }

        if (!empty($specifications['id'])) {
            $id = 'id="' .$specifications['id']. '"';
        } else {
            $id = '';
        }

        echo '
        <a ' .$href. ' ' .$target. ' ' .$id. ' ' .$class. '>
            ' .$navText. '
        </a>';
    }
}

/**
 * Returns a sanitized number
 *
 * @param [mixed] $supposedNumber string or int to be validated as int
 *
 * @return boolean returns true/false
 */
function validateInt($supposedNumber)
{
    return filter_var($supposedNumber, FILTER_SANITIZE_NUMBER_INT);
}

/**
 * Fetches Kostenstellen from DB and outputs them as option-elements
 *
 * @return void
 */
function returnKostenstellen()
{
    include 'db.php';

    $conn = new mysqli($host, $user, $password, $database);
    $conn->set_charset('utf-8');

    $getAllKostenstellenQuery = "SELECT * FROM `kostenstellen` ORDER BY `kostenstelle` ASC";
    $getAllKostenstellen = $conn->query($getAllKostenstellenQuery);

    if ($getAllKostenstellen->num_rows > 0) {
        while ($data = $getAllKostenstellen->fetch_assoc()) {
            echo '
            <option value="' .$data['kostenstelle']. '">' .$data['kostenstelle']. ' – ' .$data['beschreibung']. '</option>';
        }
    }
}

/**
 * Fetches Leistungsarten from DB and outputs them as option-elements
 *
 * @return void
 */
function returnLeistungsarten()
{
    include 'db.php';

    $conn = new mysqli($host, $user, $password, $database);
    $conn->set_charset('utf8');

    $getAllKostenstellenQuery = "SELECT * FROM `leistungsarten` ORDER BY `leistungsart` ASC";
    $getAllKostenstellen = $conn->query($getAllKostenstellenQuery);

    if ($getAllKostenstellen->num_rows > 0) {
        while ($data = $getAllKostenstellen->fetch_assoc()) {
            echo '
            <option value="' .$data['leistungsart']. '">' .$data['leistungsart']. ' – ' .$data['beschreibung']. '</option>';
        }
    }
}

/**
 * Returns unix timestamp from datestring with seconds as 0
 *
 * @param [string] $date date as a string
 *
 * @return void
 */
function returnUnixTSFromDate($date)
{
    $parseDate = date_parse($date);
    return mktime($parseDate['hour'], $parseDate['minute'], 0, $parseDate['month'], $parseDate['day'], $parseDate['year']);
}


?>