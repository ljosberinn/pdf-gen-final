<?php

session_start();

class Calendar
{

    const MONTHS_DE = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const DISABLED = '<div class="calendar-date is-disabled"><button class="date-item"></button></div>';
    const WOCHENTAGE = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
    const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const ICONS = [
        'start' => 'plane-departure',
        'ongoing' => 'plane',
        'end' => 'plane-arrival',
        'one-day' => 'umbrella-beach',
    ];


    private $_conn;
    private $_title;

    private $_daysInMonth = 0;
    private $_blank = 0;
    private $_month = 0;
    private $_year = 0;
    private $_firstDay = 0;
    private $_lastDay = 0;
    private $_secondsInLastMonth = 0;

    private $_existingTageszettel = [];
    private $_vacation = [];
    private $_currentlyActiveVacation = [];

    /**
     * @method private _returnOption
     *
     * @param string     $selected  [empty or HTML attribute selected]
     * @param int        $value     [number of year or month]
     * @param int|string $innerHTML [option content]
     *
     * @return string [HTML option element]
     */
    private function _returnOption($selected = '', $value = '', $innerHTML = '')
    {
        return '<option ' . $selected . ' value="' . $value . '">' . $innerHTML . '</option>';
    }

    /**
     * @method private _returnBlanks
     *
     * @param string $day_of_week [english weekday shortcut, e.g. Thu]
     *
     * @return int [position of $day_of_week in WEEKDAYS]
     */
    private function _returnBlanks($day_of_week = '')
    {
        return array_search($day_of_week, self::WEEKDAYS);
    }

    /**
     * @method private _returnCalendarNavigation
     *
     * @return string [some html]
     */
    private function _returnCalendarNavigation()
    {
        foreach (self::MONTHS_EN as $month_EN) {
            $index = array_search($month_EN, self::MONTHS_EN);
            $monthOptions .= $this->_returnOption($this->_title === $month_EN ? 'selected disabled' : '', ($index + 1), self::MONTHS_DE[$index]);
        }

        for ($yearOffset = -3; $yearOffset <= 3; $yearOffset += 1) {
            $otherYear = $this->_year + $yearOffset;
            $yearOptions .= $this->_returnOption($otherYear == $this->_year ? 'selected disabled' : '', $otherYear, $otherYear);
        }

        echo '
        <div class="calendar is-large">
        <div class="calendar-nav">
            <div class="calendar-nav-previous-month">
                <button data-action="-1" class="button is-small is-text"><svg viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "></polyline></svg></button>
            </div>
            <div class="calendar-month">
                <select class="select" id="calendar-month">' . $monthOptions . '</select>
                <select class="select" id="calendar-year">' . $yearOptions . '</select>
            </div>
            <div class="calendar-nav-next-month">
                <button data-action="1" class="button is-small is-text"><svg viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "></polyline></svg></button>
            </div>
        </div>
        <div class="calendar-container">';
    }

    /**
     * @method private _appendHeader
     *
     * @return string [some html]
     */
    private function _appendHeader()
    {

        echo '<div class="calendar-header">';

        foreach (self::WOCHENTAGE as $wochentag) {
            echo '<div class="calendar-date">' . $wochentag . '</div>';
        }

        echo '</div>';
    }

    /**
     * @method private _db
     *
     * @return object [mysqli object]
     */
    private function _db()
    {
        include 'db.php';

        $conn = new mysqli($host, $user, $password, $database);
        $conn->set_charset('utf-8');

        return $conn;
    }

    /**
     * @method private _getCreatedTageszettel
     *     *
     * @return array $response [empty if no PDFs within range; else filled with unixTS + minutesWorked values]
     */
    private function _getCreatedTageszettel()
    {

        $getCreatedStmt = "SELECT `day`, `minutesWorked` FROM `" . $_SESSION['personalnummer'] . "_archiv` WHERE `day` BETWEEN " . $this->_firstDay . " AND " . $this->_lastDay;
        $getCreated = $this->_conn->query($getCreatedStmt);

        $response = [];

        if ($getCreated->num_rows > 0) {
            while ($data = $getCreated->fetch_assoc()) {
                $response[$data['day']] = $data['minutesWorked'];
            }
        }

        return $response;
    }

    /**
     * @method private _lookForTageszettel
     *
     * @param int $currentDay [unixTimestamp of current iterated day]
     *
     * @return array $response [HTML a element plus minutesWorked value]
     */
    private function _lookForTageszettel($currentDay)
    {

        $response = [
            'button' => '',
            'value' => 0,
        ];

        if ($this->_existingTageszettel[$currentDay]) {
            $value = $this->_existingTageszettel[$currentDay];

            $class = '';

            if ($value < $_SESSION['arbeitszeit']) {
                $class = 'is-warning';
            } else if ($value > $_SESSION['arbeitszeit']) {
                $class = 'is-success';
            }

            $response['button'] = '<button class="button is-small calendar-event ' . $class . '"><span class="icon is-small"><i class="far fa-file-pdf"></i></span> <span>' . $value . '</span></button>';
            $response['value'] = $value;
        }

        return $response;
    }

    /**
     * @method private _scanForVacationThisMonth
     *
     * @return int $days [amount of free days]
     */
    private function _scanForVacationThisMonth()
    {
        $scanForVacationThisMonthStmt = "SELECT SUM(`days`) AS `days` FROM `vacation` WHERE `person` = " . $_SESSION['personalnummer'] . " AND `start` >= " . $this->_firstDay . " AND `end` <= " . $this->_lastDay;
        $scanForVacationThisMonth = $this->_conn->query($scanForVacationThisMonthStmt);

        $days = 0;
        if ($scanForVacationThisMonth->num_rows > 0) {
            while ($data = $scanForVacationThisMonth->fetch_assoc()) {
                $days = $data['days'];
            }
        }

        return $days;
    }

    /**
     * @method private _appendFooter
     *
     * @param int $workDaysInMonth [workdays of this month]
     * @param int $workTimeOfMonth [currently worked time during selected month]
     *
     * @return string [html P element]
     */
    private function _appendFooter($workDaysInMonth = 0, $workTimeOfMonth = 0)
    {

        $maximumPossibleWorkTime = ($_SESSION['arbeitszeit'] * $workDaysInMonth) - ($_SESSION['arbeitszeit'] * $this->_scanForVacationThisMonth());

        $workTimeQuota = round($workTimeOfMonth / $maximumPossibleWorkTime, 3) * 100;
        $missingMinutes = round((($maximumPossibleWorkTime - $workTimeOfMonth) * -1) / 60, 2);

        return '<p>Über-/Unterstunden diesen Monat: <span class="' .($missingMinutes < 0 ? 'has-text-danger' : 'has-text-success'). '">' . number_format($missingMinutes) . '</span> (<strong>' . $workTimeQuota . '%</strong> des Solls erreicht)</p>';
    }

    /**
     * @method private _getVacation
     *
     * @return array $response []
     */
    private function _getVacation()
    {
        $getVacationStmt = "SELECT * FROM `vacation` WHERE `start` >= " .($this->_firstDay - $this->_secondsInLastMonth). " AND `end` <= " .($this->_lastDay + $this->_secondsInLastMonth);
        $getVacation = $this->_conn->query($getVacationStmt);

        $response = [];

        if ($getVacation->num_rows > 0) {

            while ($data = $getVacation->fetch_assoc()) {

                $convertNummerToNameStmt = "SELECT `name` FROM `personal` WHERE `personalnummer` = " .$data['person'];
                $convertNummerToName = $this->_conn->query($convertNummerToNameStmt);

                if ($convertNummerToName->num_rows === 1) {
                    while ($nameData = $convertNummerToName->fetch_assoc()) {
                        $fullName = explode(' ', $nameData['name']);
                        $name = substr($fullName[0], 0, 1). '. ' .$fullName[1];
                    }
                }

                $length = sizeof($response[$name]);
                $response[$name][$length] = ['start' => $data['start'], 'end' => $data['end']];

            }
        }

        return $response;
    }

    /**
     * @method private _returnVacationButton
     *
     * @param int    $name [currently iterated name]
     * @param string $icon [icon name]
     *
     * @return string [HTML button element]
     */
    private function _returnVacationButton($name, $icon)
    {


        return '<button class="button calendar-event is-small is-danger"><span class="icon is-small"><i class="fas fa-' .self::ICONS[$icon]. '"></i></span> <span>' . $name . '</span></button>';
    }

    /**
     * @method private _returnBoolWeekend
     *
     * @param int $timestamp [unix ts]
     *
     * @return bool [is weekend]
     */
    private function _returnBoolWeekend($timestamp)
    {
        return in_array(date('w', $timestamp), [0, 6]);
    }

    /**
     * @method private _getEventButtons
     *
     * @param int $currentDay [unixtimestamp of currently iterated day]
     *
     * @return string $string [concatenated button elements]
     */
    private function _getEventButtons($currentDay)
    {

        $startOfLastMonth = $this->_firstDay - $this->_secondsInLastMonth;
        $endOfLastMonth = $startOfLastMonth + $this->_secondsInLastMonth - 1;

        $eventButtons = [];
        foreach ($this->_vacation as $name => $vacation) {
            foreach ($vacation as $vacationInfo) {

                // one-day vacation exemption
                if ($vacationInfo['start'] == $currentDay && $vacationInfo['end'] == $currentDay) {
                    array_push($eventButtons, $this->_returnVacationButton($name, 'one-day'));
                } else {

                    // start only if:
                    // condition 1: today is vacation start
                    // condition 2: vacation start is WITHIN LAST month, vacation end is WITHIN THIS month, today == first day of month
                    $startCondition_1 = $vacationInfo['start'] == $currentDay;
                    $startCondition_2 = $vacationInfo['start'] >= $startOfLastMonth && $vacationInfo['start'] < $this->_firstDay && $vacationInfo['end'] > $endOfLastMonth && $this->_firstDay == $currentDay;

                    if ($startCondition_1 || $startCondition_2) {
                        if ($startCondition_1 && !$this->_returnBoolWeekend($currentDay)) {
                            array_push($eventButtons, $this->_returnVacationButton($name, 'start'));
                        }

                        // if today is a weekend, only skip the button
                        array_push($this->_currentlyActiveVacation, $name);
                    }

                    // if vacation is neither starting nor ending today
                    if ($vacationInfo['start'] <= ($currentDay - 86399) && $vacationInfo['end'] >= ($currentDay + 86399)) {
                        // show warning for currently ongoing vacations
                        foreach ($this->_currentlyActiveVacation as $activeName) {
                            $indivBtn = $this->_returnVacationButton($activeName, 'ongoing');

                            if (!$this->_returnBoolWeekend($currentDay) && !in_array($indivBtn, $eventButtons)) {
                                array_push($eventButtons, $indivBtn);
                            }
                        }
                    }

                    // if vacation is ending today
                    if ($vacationInfo['end'] == $currentDay) {
                        if (!in_array($this->_returnVacationButton($name, 'ongoing'), $eventButtons)) {
                            array_push($eventButtons, $this->_returnVacationButton($name, 'end'));
                        }
                        //  remove ongoing vacation
                        $index = array_search($name, $this->_currentlyActiveVacation);
                        unset($this->_currentlyActiveVacation[$index]);
                        $this->_currentlyActiveVacation = array_values($this->_currentlyActiveVacation);
                    }
                }
            }
        }

        foreach ($eventButtons as $btn) {
            $string .= $btn;
        }

        return $string;
    }

    /**
     * @method private _appendBody
     *
     * @return string [some HTML]
     */
    private function _appendBody()
    {
        echo '<div class="calendar-body">';

        $day_count = 1;

        while ($this->_blank > 0) {
            echo self::DISABLED;

            $this->_blank -= 1;
            $day_count++;
        }

        $day_num = 1;

        $workTimeOfMonth = 0;
        $workDaysInMonth = 0;

        $currentlyActiveVacation = [];

        while ($day_num <= $this->_daysInMonth) {

            $currentDay = mktime(0, 0, 0, $this->_month, $day_num, $this->_year);

            $weekday = date('w', $currentDay);
            if ($weekday != 0 && $weekday != 6) {
                $workDaysInMonth += 1;
            }

            $pdfData = $this->_lookForTageszettel($currentDay);
            $workTimeOfMonth += $pdfData['value'];

            $eventButtons = '';
            $eventButtons = $this->_getEventButtons($currentDay);

            if ($pdfData['button'] != '') {
                $eventButtons = $pdfData['button']. '' .$eventButtons;
            }

            if ($eventButtons != '') {
                $eventButtons = '<div class="calendar-events">' .$eventButtons. '</div>';
            }

            echo '<div class="calendar-date"><button class="date-item' .($currentDay == $today ? ' is-active' : ''). '">' . $day_num . '</button>' . $eventButtons . '</div>';

            $day_num++;
            $day_count++;

            if ($day_count > 7) {
                $day_count = 1;
            }
        }

        while ($day_count > 1 && $day_count <= 7) {
            echo self::DISABLED;
            $day_count++;
        }

        echo $this->_appendFooter($workDaysInMonth, $workTimeOfMonth);

        echo '</div>';
    }

    /**
     * @method public __construct
     *
     * @param int $year  [selected year]
     * @param int $month [selected month]
     */
    public function __construct($year = '', $month = '')
    {

        $this->_conn = $this->_db();

        $today = strtotime("midnight", time());

        if (empty($year) or (empty($month) && $month != 0)) {
            $year = date('Y', $today);
            $month = date('m', $today);
        }

        if ($month == 13) {
            $year += 1;
            $month = 1;
        } else if ($month == 0) {
            $year -= 1;
            $month = 12;
        }

        $this->_month = $month;
        $this->_year = $year;

        $this->_firstDay = mktime(0, 0, 0, $this->_month, 1, $this->_year);
        $this->_daysInMonth = cal_days_in_month(0, $this->_month, $this->_year);
        $this->_lastDay = mktime(0, 0, 0, $this->_month, $this->_daysInMonth, $this->_year) + 86399;
        $this->_secondsInLastMonth = cal_days_in_month(0, ($this->_month == 0 ? 11 : $this->_month), ($this->_month == 0 ? $this->_year - 1 : $this->_year)) * 86400;

        $this->_startOfLastMonth = $this->_firstDay - $this->_secondsInLastMonth;
        $this->_endOfLastMonth = $this->_lastDay - $this->_secondsInLastMonth;

        $this->_title = date('F', $this->_firstDay);

        $day_of_week = date('D', $this->_firstDay);
        $this->_blank = $this->_returnBlanks($day_of_week);


        $this->_vacation = $this->_getVacation();
        $this->_existingTageszettel = $this->_getCreatedTageszettel();

        echo $this->_returnCalendarNavigation(). '' .$this->_appendHeader(). '' .$this->_appendBody(). '</div></div>';

    }
}

if ($_SESSION['personalnummer']) {
    isset($_POST['year']) && isset($_POST['month']) ? new Calendar($_POST['year'], $_POST['month']) : new Calendar();
} else {
    header('HTTP/1.0 403 Forbidden');
}
