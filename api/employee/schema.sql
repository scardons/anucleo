CREATE TABLE departments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO departments (name) VALUES ('CEO'), ('Ventas');

CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL DEFAULT 'staff',
  department_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (department_id) REFERENCES departments(id)
);

INSERT INTO employees (name, email, password_hash, role, department_id) VALUES
('Servando Velazquez', 'servando@anucleo.com', '$2y$12$LJ3m4ys3Lk0p5K0gRJzXNOvTmMIPm0BzLqOLNOZwOTLBoZGmvSDoS', 'admin', 1),
('Yamil Morales', 'yamil@anucleo.com', '$2y$12$LJ3m4ys3Lk0p5K0gRJzXNOvTmMIPm0BzLqOLNOZwOTLBoZGmvSDoS', 'agent', 1),
('Zonayad Akbar', 'zonayad@anucleo.com', '$2y$12$LJ3m4ys3Lk0p5K0gRJzXNOvTmMIPm0BzLqOLNOZwOTLBoZGmvSDoS', 'agent', 1);
