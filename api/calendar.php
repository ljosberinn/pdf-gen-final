<?php

session_start();

class Calendar
{

    const MONTHS_DE = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const DISABLED = '<div class="calendar-date is-disabled"><button class="date-item"></button></div>';
    const WOCHENTAGE = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
    const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    private $_conn;

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
     * @param string[] $monthOptions [possible months as option elements]
     * @param string[] $yearOptions  [possible years as option elements]
     *
     * @return string [some html]
     */
    private function _returnCalendarNavigation($monthOptions = '<option selected disabled>error</option>', $yearOptions = '<option selected disabled>error</option>')
    {
        return '
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

        <div class="calendar-container">
            ';
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
     *
     * @param int $start [unixTimestamp of first day in month]
     * @param int $end   [unixTimestamp of last day in month]
     *
     * @return array $response [empty if no PDFs within range; else filled with unixTS + minutesWorked values]
     */
    private function _getCreatedTageszettel($start = 0, $end = 0)
    {

        $getCreatedStmt = "SELECT `day`, `minutesWorked` FROM `" . $_SESSION['personalnummer'] . "_archiv` WHERE `day` BETWEEN " . $start . " AND " . $end;
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
     * @param array $existingTageszettel [array via _getCreatedTageszettel]
     * @param int   $currentDay          [unixTimestamp of current iterated day]
     *
     * @return array $response [HTML a element plus minutesWorked value]
     */
    private function _lookForTageszettel($existingTageszettel, $currentDay)
    {

        $response = [
            'button' => '',
            'value' => 0,
        ];

        if ($existingTageszettel[$currentDay]) {
            $value = $existingTageszettel[$currentDay];

            $class = '';

            if ($value < $_SESSION['arbeitszeit']) {
                $class = 'is-warning';
            } else if ($value > $_SESSION['arbeitszeit']) {
                $class = 'is-success';
            }

            $response['button'] = '<div class="calendar-events"><a class="calendar-event ' . $class . '">' . $value . '</a></div>';
            $response['value'] = $value;
        }

        return $response;
    }

    /**
     * @method private _appendFooter
     *
     * @param int $workDaysInMonth [workdays of this month]
     * @param int $workTimeOfMonth [currently worked time during selected month]
     *
     * @return string [html P element]
     */
    private function _appendFooter($workDaysInMonth = 0, $workTimeOfMonth = 0) {
        $maximumPossibleWorkTime = $_SESSION['arbeitszeit'] * $workDaysInMonth;

        $workTimeQuota = round($workTimeOfMonth / $maximumPossibleWorkTime, 3) * 100;
        $missingMinutes = round((($maximumPossibleWorkTime - $workTimeOfMonth) * -1) / 60, 2);

        return '<p>Über-/Unterstunden diesen Monat: <span class="' .($missingMinutes < 0 ? 'has-text-danger' : 'has-text-success'). '">' . number_format($missingMinutes) . '</span> (' . $workTimeQuota . '% des Solls erreicht)</p>';
    }

    /**
     * @method private _appendBody
     *
     * @param int   $blank               [required blanks at start of month]
     * @param int   $days_in_month       [days within month]
     * @param int   $month               [selected month]
     * @param int   $year                [selected year]
     * @param array $existingTageszettel [array via _getCreatedTageszettel]
     *
     * @return string [some HTML]
     */
    private function _appendBody($blank = 7, $days_in_month = 0, $month = 1, $year = 2000, $existingTageszettel = [])
    {
        echo '<div class="calendar-body">';

        $day_count = 1;

        while ($blank > 0) {
            echo self::DISABLED;

            $blank -= 1;
            $day_count++;
        }

        $day_num = 1;

        $workTimeOfMonth = 0;
        $workDaysInMonth = 0;

        while ($day_num <= $days_in_month) {

            $currentDay = mktime(0, 0, 0, $month, $day_num, $year);

            $weekday = date('w', $currentDay);
            if ($weekday != 0 && $weekday != 6) {
                $workDaysInMonth += 1;
            }

            $pdfData = $this->_lookForTageszettel($existingTageszettel, $currentDay);
            $workTimeOfMonth += $pdfData['value'];

            echo '<div class="calendar-date"><button class="date-item">' . $day_num . '</button>' . $pdfData['button'] . '</div>';

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

        $date = time();

        if (empty($year) or (empty($month) && $month != 0)) {
            $year = date('Y', $date);
            $month = date('m', $date);
        }

        if ($month == 13) {
            $year += 1;
            $month = 1;
        } else if ($month == 0) {
            $year -= 1;
            $month = 12;
        }

        $first_day = mktime(0, 0, 0, $month, 1, $year);
        $title = date('F', $first_day);
        $day_of_week = date('D', $first_day);

        foreach (self::MONTHS_EN as $month_EN) {
            $index = array_search($month_EN, self::MONTHS_EN);
            $monthOptions .= $this->_returnOption($title === $month_EN ? 'selected disabled' : '', ($index + 1), self::MONTHS_DE[$index]);
        }

        for ($yearOffset = -3; $yearOffset <= 3; $yearOffset += 1) {
            $otherYear = $year + $yearOffset;
            $yearOptions .= $this->_returnOption($otherYear == $year ? 'selected disabled' : '', $otherYear, $otherYear);
        }

        $blank = $this->_returnBlanks($day_of_week);

        $days_in_month = cal_days_in_month(0, $month, $year);

        echo $this->_returnCalendarNavigation($monthOptions, $yearOptions);

        echo $this->_appendHeader();

        $existingTageszettel = $this->_getCreatedTageszettel($first_day, mktime(0, 0, 0, $month, $days_in_month, $year));
        echo $this->_appendBody($blank, $days_in_month, $month, $year, $existingTageszettel);

        echo '
        </div>
    </div>';

    }
}

if ($_SESSION['personalnummer']) {
    isset($_POST['year']) && isset($_POST['month']) ? new Calendar($_POST['year'], $_POST['month']) : new Calendar();
} else {
    header('HTTP/1.0 403 Forbidden');
}
