<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
  http_response_code(405);
  echo json_encode(['success' => false, 'error' => 'Method not allowed']);
  exit;
}

require_once __DIR__ . '/config.php';

$stmt = $pdo->query("
  SELECT e.id, e.name, e.email, e.role, e.department_id, d.name AS department_name
  FROM employees e
  JOIN departments d ON d.id = e.department_id
  ORDER BY d.name, e.name
");
$users = $stmt->fetchAll();

$deptStmt = $pdo->query("SELECT id, name FROM departments ORDER BY name");
$departments = $deptStmt->fetchAll();

echo json_encode([
  'success' => true,
  'users' => $users,
  'departments' => $departments,
]);
