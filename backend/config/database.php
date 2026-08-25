<?php
    $servername = 'localhost';
    $dbname = '';
    $user = 'root';
    $password = '';

    try{
        $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $user, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $e) {
        echo json_encode([
            'success' => false,
            'message' => "Connect Fail: " . $e->getMessage(),
        ]);
        http_response_code(500);
        exit();
    }
?>