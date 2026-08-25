<?php
    if($method === 'OPTIONS') {
        http_response_code(200);
        exit();
    }
?>