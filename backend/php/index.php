<?php
    $postData = file_get_contents('php://input');
    $request = json_decode($postData);

    echo "El usuario pulso: $request->xo";
?>