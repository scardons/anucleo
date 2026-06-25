<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'GET') { http_response_code(405); echo json_encode(['success' => false, 'error' => 'Method not allowed']); exit; }

require_once __DIR__ . '/config.php';

$stmt = $pdo->query("
  SELECT c.visitor_id, c.visitor_name, c.visitor_email, c.message AS last_message, c.created_at AS last_time,
    (SELECT COUNT(*) FROM chat_messages WHERE visitor_id = c.visitor_id AND sender = 'visitor' AND read_by_agent = 0) AS unread
  FROM chat_messages c
  WHERE c.id IN (SELECT MAX(id) FROM chat_messages GROUP BY visitor_id)
  ORDER BY c.id DESC
");
$conversations = $stmt->fetchAll();

echo json_encode(['success' => true, 'conversations' => $conversations]);
