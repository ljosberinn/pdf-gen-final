<?php

if (empty($_SESSION['personalnummer'])) {
    $additionalSubPages = [
        'login',
    ];

} else if (!empty($_SESSION['personalnummer'])) {
    $additionalSubPages = [
        'newPDF',
        'tempSave',
        'permSave',
        'calendar',
        'options',
        'search',
    ];
}

foreach ($additionalSubPages as $subPage) {
    include 'content/' . $subPage . '.php';
}
