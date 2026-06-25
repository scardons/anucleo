<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['success' => false, 'error' => 'Method not allowed']); exit; }

require_once __DIR__ . '/config.php';

$input = json_decode(file_get_contents('php://input'), true);
if (!$input || empty($input['visitor_id']) || empty($input['message'])) {
  http_response_code(400);
  echo json_encode(['success' => false, 'error' => 'visitor_id and message are required']);
  exit;
}

$visitorId = $input['visitor_id'];
$message = trim($input['message']);
$sender = $input['sender'] ?? 'visitor';
$visitorName = trim($input['visitor_name'] ?? '');
$visitorEmail = trim($input['visitor_email'] ?? '');
$agentName = trim($input['agent_name'] ?? '');

if ($sender === 'agent') {
  $stmt = $pdo->prepare("INSERT INTO chat_messages (visitor_id, visitor_name, visitor_email, message, sender, agent_name) VALUES (?, '', '', ?, 'agent', ?)");
  $stmt->execute([$visitorId, $message, $agentName]);
} else {
  $stmt = $pdo->prepare("INSERT INTO chat_messages (visitor_id, visitor_name, visitor_email, message, sender) VALUES (?, ?, ?, ?, 'visitor')");
  $stmt->execute([$visitorId, $visitorName, $visitorEmail, $message]);
}

echo json_encode(['success' => true, 'id' => (int)$pdo->lastInsertId()]);
