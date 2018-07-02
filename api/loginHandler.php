<?php

if (isset($_POST['personalnummer'])) {

    include 'functions.php';

    $personalnummer = validateInt($_POST['personalnummer']);

    if (!empty($personalnummer)) {
        include 'db.php';

        $conn = new mysqli($host, $user, $password, $database);

        $searchForUserQuery = "SELECT * FROM `personal` WHERE `personalnummer` = " .$personalnummer;
        $searchForUser = $conn->query($searchForUserQuery);

        if ($searchForUser->num_rows == 1) {

            while ($data = $searchForUser->fetch_assoc()) {

                session_start();
                $_SESSION['personalnummer'] = $personalnummer;
                $_SESSION['name'] = $data['name'];
                $_SESSION['arbeitszeit'] = $data['arbeitszeit'];
                $_SESSION['startAvg'] = roundMinutes(returnAverageStartTime($conn, $personalnummer));

                header('Location: ../index.php');
            }
        } else {
            header('Location: ../?loginError');
        }
    } else {
        header('Location: ../?loginError');
    }
}

?>