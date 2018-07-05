<?php

ob_start();

if (isset($_POST['personalnummer'])) {

    include 'functions.php';

    $personalnummer = validateInt($_POST['personalnummer']);

    if (!empty($personalnummer)) {
        include 'db.php';

        $conn = new mysqli($host, $user, $password, $database);

        $searchForUserQuery = "SELECT * FROM `personal` WHERE `personalnummer` = " .$personalnummer;
        $searchForUser = $conn->query($searchForUserQuery);

        if ($searchForUser->num_rows === 1) {

            while ($data = $searchForUser->fetch_assoc()) {

                session_start();
                $_SESSION['personalnummer'] = $personalnummer;
                $_SESSION['name'] = $data['name'];
                $_SESSION['arbeitszeit'] = $data['arbeitszeit'];
                $_SESSION['startAvg'] = roundMinutes(returnAverageStartTime($conn, $personalnummer));
                $_SESSION['überminuten'] = $data['überminuten'];

                $_SESSION['admin'] = $data['rolle'] == 1;

                $_SESSION['urlaubstage'] = $data['urlaubstage'];
                $_SESSION['remaining_urlaubstage'] = 0;

                $startData = explode(':', $_SESSION['startAvg']);
                $workEndSeconds = (validateInt($startData[0]) * 60 + validateInt($startData[1]) + $_SESSION['arbeitszeit'] + 45) * 60;
                $_SESSION['endAvg'] = roundMinutes(secondsToTime($workEndSeconds));


                header('Location: ../index.php');
            }
        } else {
            header('Location: ../?loginError');
        }
    } else {
        header('Location: ../?loginError');
    }
}

ob_end_flush();
?>