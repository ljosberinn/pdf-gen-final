<?php

session_start();

class Calendar
{

    const MONTHS_DE = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const DISABLED = '<div class="calendar-date is-disabled"><button class="date-item"></button></div>';
    const WOCHENTAGE = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
    const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    private function _returnOption($selected = '', $value = '', $innerHTML = '') {
        return '<option ' .$selected. ' value="' .$value. '">' .$innerHTML. '</option>';
    }

    private function _returnBlanks($day_of_week = '') {
        return array_search($day_of_week, self::WEEKDAYS);
    }

    private function _returnCalendarNavigation($monthOptions = '<option selected disabled>error</option>', $yearOptions = '<option selected disabled>error</option>') {
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

    private function _appendHeader()  {

        echo '<div class="calendar-header">';

        foreach (self::WOCHENTAGE as $wochentag) {
            echo '<div class="calendar-date">' .$wochentag. '</div>';
        }

        echo '</div>';
    }

    private function _db() {
        require 'db.php';

        $conn = new mysqli($host, $user, $password, $database);
        $conn->set_charset('utf-8');

        return $conn;
    }

    private function _appendBody($blank = 7, $days_in_month = 0, $month = 1, $year = 2000) {
        echo '<div class="calendar-body">';

        $day_count = 1;

        while ($blank > 0) {
            echo self::DISABLED;

            $blank -= 1;
            $day_count++;
        }

        $day_num = 1;

        while ($day_num <= $days_in_month) {

            $currentDay = mktime(0, 0, 0, $month, $day_num, $year);

            echo '<div class="calendar-date"><button class="date-item">' . $day_num . '</button></div>';

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


        echo '</div>';
    }

    public function __construct($year = '', $month = '')
    {

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
            $monthOptions .= $this->_returnOption($title === $month_EN ? 'selected disabled': '', ($index + 1), self::MONTHS_DE[$index]);
        }

        for ($yearOffset = -3; $yearOffset <= 3; $yearOffset += 1) {
            $otherYear = $year + $yearOffset;
            $yearOptions .= $this->_returnOption($otherYear == $year ? 'selected disabled': '', $otherYear, $otherYear);
        }

        $blank = $this->_returnBlanks($day_of_week);

        $days_in_month = cal_days_in_month(0, $month, $year);

        echo $this->_returnCalendarNavigation($monthOptions, $yearOptions);

        echo $this->_appendHeader();

        echo $this->_appendBody($blank, $days_in_month, $month, $year);

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