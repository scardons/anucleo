<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'GET') { http_response_code(405); echo json_encode(['success' => false, 'error' => 'Method not allowed']); exit; }

require_once __DIR__ . '/config.php';

$stats = $pdo->query("SELECT 
  COUNT(CASE WHEN status = 'new' THEN 1 END) AS new_quotes,
  COUNT(CASE WHEN status = 'reviewed' THEN 1 END) AS reviewed,
  COUNT(CASE WHEN status = 'follow-up' THEN 1 END) AS followup,
  COUNT(*) AS total
FROM quotes")->fetch();

echo json_encode(['success' => true, 'stats' => $stats]);