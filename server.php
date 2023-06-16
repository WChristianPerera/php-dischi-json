<?php
    $musicDisks = file_get_contents('data.json');

    header('content-type: application/json');
    echo $musicDisks;
?>    