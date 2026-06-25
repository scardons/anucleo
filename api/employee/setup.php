<?php
// Run this ONCE, then DELETE IT
$host = 'localhost';
$db = 'anucleo_employees';
$user = 'anucleo_emp';
$pass = 'Anucelo123*';

try {
  $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $pdo->exec("
    CREATE TABLE IF NOT EXISTS departments (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL UNIQUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS employees (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(200) NOT NULL,
      email VARCHAR(200) NOT NULL UNIQUE,
      password_hash VARCHAR(255) NOT NULL,
      role VARCHAR(50) NOT NULL DEFAULT 'staff',
      department_id INT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (department_id) REFERENCES departments(id)
    );
  ");

  // Seed departments
  $pdo->exec("INSERT IGNORE INTO departments (name) VALUES ('CEO'), ('Ventas')");

  // Seed employees (password: anucleo2025)
  $hash = password_hash('anucleo2025', PASSWORD_BCRYPT);
  $stmt = $pdo->prepare("INSERT IGNORE INTO employees (name, email, password_hash, role, department_id) VALUES (?, ?, ?, ?, ?)");
  $stmt->execute(['Servando Velazquez', 'servando@anucleo.com', $hash, 'admin', 1]);
  $stmt->execute(['Yamil Morales', 'yamil@anucleo.com', $hash, 'agent', 1]);
  $stmt->execute(['Zonayad Akbar', 'zonayad@anucleo.com', $hash, 'agent', 1]);

  echo "Setup complete! Tables created and data seeded.<br>";
  echo "Hash used: " . htmlspecialchars($hash) . "<br>";
  echo "<strong>Delete this file now!</strong>";
} catch (PDOException $e) {
  http_response_code(500);
  echo "Error: " . $e->getMessage();
}
