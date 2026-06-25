<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['success' => false, 'error' => 'Method not allowed']); exit; }

require_once __DIR__ . '/config.php';

$input = json_decode(file_get_contents('php://input'), true);
if (!$input || empty($input['visitor_id'])) {
  http_response_code(400);
  echo json_encode(['success' => false, 'error' => 'visitor_id is required']);
  exit;
}

$stmt = $pdo->prepare("UPDATE chat_messages SET read_by_agent = 1 WHERE visitor_id = ? AND sender = 'visitor' AND read_by_agent = 0");
$stmt->execute([$input['visitor_id']]);

echo json_encode(['success' => true, 'updated' => $stmt->rowCount()]);