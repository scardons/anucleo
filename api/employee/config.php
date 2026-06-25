<?php
$host = 'localhost';
$db_name = 'anucleo_employees';
$username = 'anucleo_emp';
$password = 'Santiago9719*';

try {
  $pdo = new PDO("mysql:host=$host;dbname=$db_name;charset=utf8", $username, $password);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch (PDOException $e) {
  http_response_code(500);
  echo json_encode(['success' => false, 'error' => 'Database connection failed']);
  exit;
}
