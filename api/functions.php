<?php

/**
 * Functions.php
 *
 * Contains all PHP-functions
 *
 * PHP version 5.6
 *
 * @category  Functions
 * @package   API/functions.php
 * @author    Gerrit Alex <admin@gerritalex.de>
 * @copyright 2016-2018 Gerrit Alex
 * @license   MIT (https://de.wikipedia.org/wiki/MIT-Lizenz)
 * @link      https://github.com/ljosberinn/pdf-gen-final
 */

/**
 * Defines general security headers preventing sniffing, x-framing and XSS-protection
 *
 * @return [headerOption]
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
 * @param [array] $files [$ownJSFiles, relative links to file]
 *
 * @return string [script link]
 */
function appendFiles($files)
{
    foreach ($files as $filename => $type) {

        $link = 'assets/' . $type . '/' . $filename . '.min.' . $type;
        $link .= '?' . filemtime($link);

        echo $type === 'js' ? '<script src="' . $link . '"></script>' : '<link rel="stylesheet" href="' . $link . '" />';
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

        foreach (['class', 'href', 'data-target', 'id'] as $attribute) {
            ${str_replace('-', '', $attribute)} = !empty($specifications[$attribute]) ? '' . $attribute . '="' . $specifications[$attribute] . '"' : '';
        }

        echo '<a ' . $href . ' ' . $datatarget . ' ' . $id . ' ' . $class . '>' . $navText . '</a>';
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
 * Fetches
 *
 * @param object $conn [mysqli object]
 * @param string $type ['kostenstelle' or 'leistungsart']
 *
 * @return array $arr
 */
function returnConstants($conn, $type)
{
    $arr = [];

    $plural = $type === 'kostenstelle' ? 'kostenstellen' : 'leistungsarten';

    $query = "SELECT * FROM `" . $plural . "` ORDER BY `" . $type . "` ASC";
    $execution = $conn->query($query);

    if ($execution->num_rows > 0) {
        while ($data = $execution->fetch_assoc()) {
            array_push($arr, '<option value="' . $data[$type] . '">' . $data[$type] . ' – ' . $data['beschreibung'] . '</option>');
        }
    }

    return $arr;
}

/**
 * Returns unix timestamp from datestring with seconds as 0
 *
 * @param [string] $date date as a string
 *
 * @return [number]
 */
function returnUnixTSFromDate($date)
{
    $parseDate = date_parse($date);
    return mktime($parseDate['hour'], $parseDate['minute'], 0, $parseDate['month'], $parseDate['day'], $parseDate['year']);
}

/**
 * Returns individualised table creation statement
 *
 * @param [string] $type           table type
 * @param [int]    $personalnummer current session personalnummer
 *
 * @return [string] $statement sql statement
 */
function getCreationStatement($type, $personalnummer)
{
    $statement = 'CREATE TABLE IF NOT EXISTS `' . $personalnummer . '_' . $type . '` (
        `day` int(10) NOT NULL,
        `created` int(10) NOT NULL,
        `startTimestamp` int(10) NOT NULL,
        `endTimestamp` int(10) NOT NULL,
        `minutesWorked` mediumint(4) NOT NULL,
        `frühstückspause` tinyint(1) NOT NULL,
        `mittagspause` tinyint(1) NOT NULL,
        `außer-haus` mediumint(4) NOT NULL,';

    for ($i = 1; $i <= 22; $i += 1) {
        $statement .= '
        `kostenstelle-' . $i . '` mediumint(3) NOT NULL,
        `auftragsnummer-' . $i . '` int(10) NOT NULL,
        `kunde-' . $i . '` varchar(255) NOT NULL,
        `leistungsart-' . $i . '` mediumint(3) NOT NULL,
        `minuten-' . $i . '` mediumint(4) NOT NULL,
        `anzahl-' . $i . '` int(10) NOT NULL,
        `materialnummer-' . $i . '` int(10) NOT NULL, ';
    }

    $statement .= '
        `kostenstelle-890` mediumint(3) NOT NULL DEFAULT "890",
        `leistungsart-890` mediumint(3) NOT NULL DEFAULT "998",
        `minuten-890` mediumint(3) NOT NULL,
        UNIQUE KEY `day` (`day`)
    )';

    return $statement;
}

/**
 * Returns 0 for supposedly numeric, but empty values and '' for string values
 *
 * @param [string] $type  column name
 * @param [string] $input value
 *
 * @return void
 */
function sanitizeInput($type, $input)
{
    if ($input == '') {
        return $type !== 'kunde' ? 0 : $input;
    } else {
        return $input;
    }
}

/**
 * Returns individualized insertion statement based on input
 *
 * @param [integer] $personalnummer current session personalnummer
 * @param [string]  $type           archiv or zwischenspeicher
 * @param [integer] $length         amount of rows
 * @param [int]     $has890         value of 23rd row
 *
 * @return [string] $insertionStatement insertion statement basics
 */
function buildInsertionStatement($personalnummer, $type, $length, $has890)
{

    $insertionStatement = 'INSERT INTO `' . $personalnummer . '_' . $type . '`
    (`day`, `created`, `startTimestamp`, `endTimestamp`, `minutesWorked`, `frühstückspause`, `mittagspause`, `außer-haus`, ';

    for ($i = 1; $i <= $length; $i += 1) {
        $insertionStatement .= '`kostenstelle-' . $i . '`, `auftragsnummer-' . $i . '`, `kunde-' . $i . '`, `leistungsart-' . $i . '`, `minuten-' . $i . '`, `anzahl-' . $i . '`, `materialnummer-' . $i . '`, ';
    }

    if ($has890 > 0) {
        $insertionStatement .= '`minuten-890`, ';
    }

    return $insertionStatement;
}

/**
 * Appends individual data to insertion statement
 *
 * @param [string]  $insertionStatement current insertionStatement returned from buildInsertionStatement()
 * @param [array]   $data               grouped $_POST data
 * @param [integer] $length             amount of rows
 * @param [integer] $has890             value of 23rd row
 *
 * @return [string] $insertionStatement new insertion statement with data appended
 */
function appendDataToInsertionStatement($insertionStatement, $data, $length, $has890)
{

    $posten = [
        'kostenstelle',
        'auftragsnummer',
        'kunde',
        'leistungsart',
        'minuten',
        'anzahl',
        'materialnummer',
    ];

    for ($i = 0; $i <= ($length - 1); $i += 1) {

        if ($data['minuten'][$i] != "") {

            foreach ($posten as $var) {
                ${$var} = sanitizeInput($var, $data[$var][$i]);
            }

            $insertionStatement .= '
            ' . $kostenstelle . ',
            ' . $auftragsnummer . ',
            "' . $kunde . '",
            ' . $leistungsart . ',
            ' . $minuten . ',
            ' . $anzahl . ',
            ' . $materialnummer . ',';
        }
    }

    if ($has890 > 0) {
        $insertionStatement .= $has890 . ',';
    }

    return substr($insertionStatement, 0, -1) . ');';
}

/**
 * Creates new FPDI object, imports template, font and returns object
 *
 * @return [object] $pdf FPDI object
 */
function returnPDFBasics()
{
    $pdf = new FPDI();
    $pageCount = $pdf->setSourceFile('template.pdf');
    $tplIdx = $pdf->importPage(1);
    $pdf->AddFont('Roboto-Regular', '', 'Roboto-Regular.php');
    $pdf->AddPage();
    $pdf->SetFont('Roboto-Regular', '', 10);
    $pdf->useTemplate($tplIdx, 0, 0, 210, 297);

    return $pdf;
}

/**
 * Returns average start time according to previous database entries
 *
 * @param [object]  $conn           database connection
 * @param [integer] $personalnummer current $personalnummer
 *
 * @return [string] $startAvg average start time of the day
 */
function returnAverageStartTime($conn, $personalnummer)
{
    $getStartEndAverages = "SELECT ROUND(AVG(`startTimestamp`-  `day`)) AS `start` FROM `" . $personalnummer . "_archiv`";
    $startEndAverages = $conn->query($getStartEndAverages);

    if ($startEndAverages->num_rows == 1) {
        while ($data = $startEndAverages->fetch_assoc()) {

            $hourNonFloored = $data['start'] / 3600;
            $hour = floor($hourNonFloored);
            $minutes = round(($hourNonFloored - $hour) * 60);

            $checkStrlen = [
                'hour',
                'minutes',
            ];

            foreach ($checkStrlen as $varName) {
                if (strlen(${$varName}) == 1) {
                    ${$varName} = '0' . ${$varName};
                }
            }

            $startAvg = $hour . ':' . $minutes;

        }
    } else {
        $startAvg = '08:00';
    }

    return $startAvg;
}

/**
 *  Localizes new DateTimeImmutable object
 *
 * @param object $ts [new DateTimeImmutable() object]
 *
 * @return object $ts [str replaced $ts]
 */
function manualDateLocalization($ts)
{
    $arr = [
        'Mon' => 'Mo',
        'Tue' => 'Di',
        'Wed' => 'Mi',
        'Thu' => 'Do',
        'Fri' => 'Fr',
        'Sat' => 'Sa',
        'Sun' => 'So',
    ];

    foreach ($arr as $en => $de) {
        $ts = str_replace($en, $de, $ts);
    }

    return $ts;
}

/**
 * Rounds minutes to either 0 or 5 depending on its value
 *
 * @param string $commaSeparatedHourMinuteStamp [e.g. 05:13]
 *
 * @return string [e.g. 05:15]
 */
function roundMinutes($commaSeparatedHourMinuteStamp)
{
    $arr = explode(':', $commaSeparatedHourMinuteStamp);

    $minutes = $arr[1];

    if ($minutes % 5 === 0) {
        return $commaSeparatedHourMinuteStamp;
    } else {
        $minuteValues = str_split($minutes);
        return $arr[0] . ':' . $minuteValues[0] . '' . ($minuteValues[1] < 3 ? 0 : 5);
    }
}

/**
 * Calculates seconds of day passed to hours and minutes of that day
 *
 * @param int $minutes [e.g. 120]
 *
 * @return string [e.g. 00:02]
 */
function secondsToTime($minutes)
{
    $dtF = new \DateTime('@0');
    $dtT = new \DateTime("@$minutes");
    $result = $dtF->diff($dtT);
    $min = $result->i;

    if ($min == 0) {
        $min = '00';
    }

    return $result->h . ':' . $min;
}

/**
 * Helper function to allow <1s microtimes
 *
 * @return float
 */
function microtime_float()
{
    list($usec, $sec) = explode(" ", microtime());
    return ((float) $usec + (float) $sec);
}
/**
 * @method returnUsedVacationDays
 *
 * @param object $conn           [mysqli object]
 * @param int    $start          [unix timestamp]
 * @param int    $end            [unix timestamp]
 * @param int    $personalnummer [personalnummer]
 *
 * @return int $usedVacationDays
 */
function returnUsedVacationDays($conn, $start, $end, $personalnummer)
{
    $usedVacationStmt = "SELECT SUM(`days`) AS `used_vacation` FROM `vacation` WHERE `person` = " . $personalnummer . " AND `start` >= " . $start . " AND `end` <= " . $end;
    $usedVacation = $conn->query($usedVacationStmt);

    $usedVacationDays = 0;

    if ($usedVacation->num_rows === 1) {
        while ($data = $usedVacation->fetch_assoc()) {
            $usedVacationDays = $data['used_vacation'];
        }
    }

    return $usedVacationDays;
}

/**
 * @method returnPlainLeistungsarten
 *
 * @param object $conn [mysqli object]
 *
 * @return array $leistungsarten
 */
function returnPlainLeistungsarten($conn)
{
    $leistungsarten = [];

    $selectLeistungsartenStmt = "SELECT * FROM `leistungsarten`";
    $selectLeistungsarten = $conn->query($selectLeistungsartenStmt);

    if ($selectLeistungsarten->num_rows > 0) {
        while ($data = $selectLeistungsarten->fetch_assoc()) {
            $leistungsarten[$data['leistungsart']] = $data['beschreibung'];
        }
    }

    return $leistungsarten;
}

/**
 * @method getPersonalnummern
 *
 * @param object $conn [mysqli object]
 *
 * @return array $personalnummern
 */
function getPersonalnummern($conn)
{
    $personalnummern = [];

    $getPersonalnummernStmt = "SELECT `personalnummer`, `name` FROM `personal`";
    $getPersonalnummern = $conn->query($getPersonalnummernStmt);

    if ($getPersonalnummern->num_rows > 0) {
        while ($data = $getPersonalnummern->fetch_assoc()) {
            array_push($personalnummern, ['personalnummer' => $data['personalnummer'], 'name' => $data['name']]);
        }
    }
    return $personalnummern;
}

/**
 * @method getEntries
 *
 * @param object $conn            [mysqli object]
 * @param array  $personalnummern [array via getPersonalnummern]
 * @param string $type            [search type]
 * @param string $value           [search value]
 *
 * @return array $entries [gefundene Daten]
 */
function getEntries($conn, $personalnummern, $type, $value)
{
    $entries = [];

    $oneYearBack = time('now') - 365 * 86400;

    foreach ($personalnummern as $dataset) {
        $searchQuery = "SELECT * FROM `" . $dataset['personalnummer'] . "_archiv` WHERE ";
        for ($i = 1; $i <= 22; $i += 1) {
            $searchQuery .= "`day` >= " .$oneYearBack. " AND `" . $type . "-" . $i . "` LIKE '%" . $value . "%' OR ";
        }
        $searchQuery = substr($searchQuery, 0, -4);

        $search = $conn->query($searchQuery);

        if ($search->num_rows > 0) {
            while ($data = $search->fetch_assoc()) {
                $data['createdBy'] = $dataset['name'];
                array_push($entries, $data);
            }
        }
    }

    return $entries;
}

/**
 * @method removeIteratables
 *
 * @param array $entry [currently looped entry]
 * @param int   $i     [current iteration]
 *
 * @return array $entry [modified entry]
 */
function removeIteratables($entry, $i)
{
    foreach (['kostenstelle', 'materialnummer', 'anzahl'] as $key) {
        unset($entry[$key . '-' . $i]);
    }

    return $entry;
}

/**
 * @method checkForEmptiness
 *
 * @param array  $entry         [current dataset]
 * @param int    $i             [iteration]
 * @param string $type          [search type]
 * @param string $value         [search value]
 * @param array  $checkForEmpty [constants]
 *
 * @return bool
 */
function isEmpty($entry, $i, $type, $value, $checkForEmpty)
{
    foreach ($checkForEmpty as $key) {
        if ($key == $type && strpos($entry[$key . "-" . $i], $value) === false) {
            return true;
        }
    }
    return false;
}

/**
 * @method  returnRowData
 *
 * @param array $entry          [currently looped entry]
 * @param int   $i              [current iteration]
 * @param array $leistungsarten [array via getPlainleistungsarten]
 *
 * @return array [entries['rows'] data]
 */
function returnRowData($entry, $i, $leistungsarten)
{
    return [
        'kunde' => $entry['kunde-' . $i],
        'auftragsnummer' => $entry['auftragsnummer-' . $i],
        'leistungsart' => $entry['leistungsart-' . $i] . ' <small>(' . $leistungsarten[$entry['leistungsart-' . $i]] . ')</small>',
        'minuten' => $entry['minuten-' . $i],
    ];
}

/**
 * @method unsetBasicData
 *
 * @param array $entry         [currently looped entry]
 * @param int   $i             [current iteration]
 * @param array $checkForEmpty [values to be removed]
 *
 * @return array $entry [modified $entry]
 */
function unsetBasicData($entry, $i, $checkForEmpty)
{
    foreach ($checkForEmpty as $key) {
        unset($entry[$key . "-" . $i]);
    }

    return $entry;
}

/**
 * @method removeConstants
 *
 * @param array $entry [currently iterated entry]
 *
 * @return array $entry [modified entry]
 */
function removeConstants($entry)
{
    foreach ([
        'created',
        'startTimestamp',
        'endTimestamp',
        'frühstückspause',
        'mittagspause',
        'minuten-890',
        'kostenstelle-890',
        'leistungsart-890',
        'minutesWorked',
        'außer-haus',
        'kostenstelle',
    ] as $key) {
        unset($entry[$key]);
    }

    return $entry;
}

/**
 * @method filterEntries
 *
 * @param array  $entries        [data via getEntries]
 * @param string $type           [search type]
 * @param string $value          [search value]
 * @param array  $leistungsarten [array via getLeistungsarten]
 *
 * @return array $entries [search result]
 */
function filterEntries($entries, $type, $value, $leistungsarten)
{

    $checkForEmpty = [
        'kostenstelle',
        'auftragsnummer',
        'kunde',
        'leistungsart',
        'minuten',
        'anzahl',
        'materialnummer',
    ];

    foreach ($entries as $entry) {
        $index = array_search($entry, $entries);
        $entry['rows'] = [];

        // loopt alle möglichen Spalten und entfernt leere Einträge, falls der Wert nicht in der gesuchten Spalte zu finden ist
        for ($i = 1; $i <= 22; $i += 1) {

            $entry = removeIteratables($entry, $i);

            if (!isEmpty($entry, $i, $type, $value, $checkForEmpty)) {
                array_push($entry['rows'], returnRowData($entry, $i, $leistungsarten));
            }

            $entry = unsetBasicData($entry, $i, $checkForEmpty);
        }

        $entry = removeConstants($entry);

        $entry['day'] = date('d.m.Y', $entry['day']);

        if (empty($entry['rows'])) {
            unset($entries[$index]);
        } else {
            $entries[$index] = $entry;
        }
    }
    return $entries;
}
