<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input || !isset($input['data'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid request']);
    exit;
}

$data = $input['data'];
$to = $input['to'] ?? ['services@anucleo.com'];
$subject = $input['subject'] ?? 'New Quote Request';

// Save to database
try {
    require_once __DIR__ . '/employee/config.php';
    $stmt = $pdo->prepare("INSERT INTO quotes (industry, work_types, contracting_types, business_characteristics, email, first_name, last_name, phone, business_name, address, state, car_year, car_make, car_model, car_trim, car_use, car_daily_miles, car_ownership, car_full_coverage) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([
        $data['industry'] ?? '',
        is_array($data['workTypes'] ?? null) ? implode(', ', $data['workTypes']) : ($data['workTypes'] ?? ''),
        is_array($data['contractingTypes'] ?? null) ? implode(', ', $data['contractingTypes']) : ($data['contractingTypes'] ?? ''),
        is_array($data['businessCharacteristics'] ?? null) ? implode(', ', $data['businessCharacteristics']) : ($data['businessCharacteristics'] ?? ''),
        $data['email'] ?? '',
        $data['firstName'] ?? '',
        $data['lastName'] ?? '',
        $data['phone'] ?? '',
        $data['businessName'] ?? '',
        $data['address'] ?? '',
        $data['state'] ?? '',
        $data['carYear'] ?? '',
        $data['carMake'] ?? '',
        $data['carModel'] ?? '',
        $data['carTrim'] ?? '',
        $data['carUse'] ?? '',
        $data['carDailyMiles'] ?? '',
        $data['carOwnership'] ?? '',
        $data['carFullCoverage'] ?? '',
    ]);
} catch (Exception $e) {
    // DB insert failure should not block email sending
}

$html = '
<h1>New Quote Request</h1>
<p><strong>Industry:</strong> ' . htmlspecialchars($data['industry'] ?? '') . '</p>
<p><strong>Name:</strong> ' . htmlspecialchars(($data['firstName'] ?? '') . ' ' . ($data['lastName'] ?? '')) . '</p>
<p><strong>Email:</strong> ' . htmlspecialchars($data['email'] ?? '') . '</p>
<p><strong>Phone:</strong> ' . htmlspecialchars($data['phone'] ?? '') . '</p>
<p><strong>Business Name:</strong> ' . htmlspecialchars($data['businessName'] ?? '') . '</p>
<p><strong>Address:</strong> ' . htmlspecialchars(($data['address'] ?? '') . ', ' . ($data['state'] ?? '')) . '</p>
<h3>Work Types:</h3>
<ul>';

if (!empty($data['workTypes']) && is_array($data['workTypes'])) {
    foreach ($data['workTypes'] as $t) {
        $html .= '<li>' . htmlspecialchars($t) . '</li>';
    }
}

$html .= '</ul>
<h3>Contracting Types:</h3>
<ul>';

if (!empty($data['contractingTypes']) && is_array($data['contractingTypes'])) {
    foreach ($data['contractingTypes'] as $t) {
        $html .= '<li>' . htmlspecialchars($t) . '</li>';
    }
}

$html .= '</ul>
<h3>Business Characteristics:</h3>
<ul>';

if (!empty($data['businessCharacteristics']) && is_array($data['businessCharacteristics'])) {
    foreach ($data['businessCharacteristics'] as $c) {
        $html .= '<li>' . htmlspecialchars($c) . '</li>';
    }
}

$html .= '</ul>';

if (!empty($data['carYear'])) {
    $html .= '
<h3>Car Info:</h3>
<ul>
  <li><strong>Year:</strong> ' . htmlspecialchars($data['carYear']) . '</li>
  <li><strong>Make:</strong> ' . htmlspecialchars($data['carMake'] ?? '') . '</li>
  <li><strong>Model:</strong> ' . htmlspecialchars($data['carModel'] ?? '') . '</li>
  <li><strong>Trim:</strong> ' . htmlspecialchars($data['carTrim'] ?? '') . '</li>
  <li><strong>Use:</strong> ' . htmlspecialchars($data['carUse'] ?? '') . '</li>
  <li><strong>Daily Miles:</strong> ' . htmlspecialchars($data['carDailyMiles'] ?? '') . '</li>
  <li><strong>Ownership:</strong> ' . htmlspecialchars($data['carOwnership'] ?? '') . '</li>
  <li><strong>Full Coverage:</strong> ' . htmlspecialchars($data['carFullCoverage'] ?? '') . '</li>
</ul>';
}

$apiKey = 're_auzmPxsT_Hwe867TybfmgoGePToQXVSLW';
$fromEmail = 'noreply@anucleo.com';

$payload = [
    'from' => $fromEmail,
    'to' => is_array($to) ? $to : [$to],
    'subject' => $subject,
    'html' => $html,
];

$ch = curl_init('https://api.resend.com/emails');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $apiKey,
    'Content-Type: application/json',
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_TIMEOUT, 30);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);
curl_close($ch);

if ($error) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $error]);
    exit;
}

if ($httpCode >= 200 && $httpCode < 300) {
    echo json_encode(['success' => true, 'message' => 'Quote email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Resend API error: ' . $response]);
}
