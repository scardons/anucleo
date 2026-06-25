<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['success' => false, 'error' => 'Method not allowed']);
  exit;
}

require_once __DIR__ . '/config.php';

$input = json_decode(file_get_contents('php://input'), true);

if (!$input || empty($input['email']) || empty($input['password'])) {
  http_response_code(400);
  echo json_encode(['success' => false, 'error' => 'Email and password required']);
  exit;
}

$email = strtolower(trim($input['email']));
$password = $input['password'];

$stmt = $pdo->prepare("SELECT id, name, email, password_hash, role, department_id FROM employees WHERE email = ?");
$stmt->execute([$email]);
$employee = $stmt->fetch();

if (!$employee || !password_verify($password, $employee['password_hash'])) {
  http_response_code(401);
  echo json_encode(['success' => false, 'error' => 'Invalid credentials']);
  exit;
}

$stmt = $pdo->prepare("SELECT name FROM departments WHERE id = ?");
$stmt->execute([$employee['department_id']]);
$dept = $stmt->fetch();

echo json_encode([
  'success' => true,
  'employee' => [
    'id' => $employee['id'],
    'name' => $employee['name'],
    'email' => $employee['email'],
    'role' => $employee['role'],
    'department' => $dept ? $dept['name'] : '',
  ],
]);
