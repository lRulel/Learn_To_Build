<?php
    $routes = [
        "/api/test" => [
            "file" => "route/api/test.php",
            "auth" => false,
        ],
    ];

    $route = $routes[$path] ?? NULL;

    if($route) {
        if ($route['auth']) {
            require_once("route/middleware/passport.php");
        }

        require_once($route["file"]);
        exit();
    }

    require_once('error/404.php');
    exit();
?>