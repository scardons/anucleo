<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'GET') { http_response_code(405); echo json_encode(['success' => false, 'error' => 'Method not allowed']); exit; }

require_once __DIR__ . '/config.php';

$visitorId = $_GET['visitor_id'] ?? '';
$since = (int)($_GET['since'] ?? 0);

if (empty($visitorId)) {
  http_response_code(400);
  echo json_encode(['success' => false, 'error' => 'visitor_id is required']);
  exit;
}

$stmt = $pdo->prepare("SELECT id, visitor_name, visitor_email, message, sender, agent_name, created_at FROM chat_messages WHERE visitor_id = ? AND id > ? ORDER BY id ASC");
$stmt->execute([$visitorId, $since]);
$messages = $stmt->fetchAll();

echo json_encode(['success' => true, 'messages' => $messages]);
