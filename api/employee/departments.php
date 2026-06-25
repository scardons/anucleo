<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit;
}

require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $input = json_decode(file_get_contents('php://input'), true);
  if (!$input || empty(trim($input['name']))) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Department name is required']);
    exit;
  }
  $name = trim($input['name']);
  $stmt = $pdo->prepare("INSERT INTO departments (name) VALUES (?)");
  $stmt->execute([$name]);
  $id = $pdo->lastInsertId();
  echo json_encode(['success' => true, 'department' => ['id' => (int)$id, 'name' => $name]]);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
  $input = json_decode(file_get_contents('php://input'), true);
  if (!$input || empty($input['id'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Department id is required']);
    exit;
  }
  $id = (int)$input['id'];
  $check = $pdo->prepare("SELECT COUNT(*) FROM employees WHERE department_id = ?");
  $check->execute([$id]);
  if ($check->fetchColumn() > 0) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Cannot delete department with assigned users']);
    exit;
  }
  $stmt = $pdo->prepare("DELETE FROM departments WHERE id = ?");
  $stmt->execute([$id]);
  echo json_encode(['success' => true]);
  exit;
}

http_response_code(405);
echo json_encode(['success' => false, 'error' => 'Method not allowed']);
