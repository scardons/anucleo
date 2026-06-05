// server/index.js
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import { findBestResponse } from './chatbot/faq.js';

// Configurar dotenv desde server/.env
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 3001;

// Configuración CORS (ajusta si necesitas otros orígenes)
app.use(cors({
  origin: ['http://localhost:8080', 'http://127.0.0.1:8080'],
}));

app.use(express.json());

// Verificación de carga de variables
if (!process.env.RESEND_API_KEY) {
  console.error('❌ RESEND_API_KEY no encontrada. Revisa tu .env');
  process.exit(1);
}

console.log('✅ RESEND_API_KEY cargada correctamente (parcial)');
console.log('TO_EMAIL:', process.env.TO_EMAIL);

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/send-quote', async (req, res) => {
  try {
    const { data, to, subject } = req.body;

    if (!data || typeof data !== 'object') {
      return res.status(400).json({ success: false, error: 'Missing or invalid quote data' });
    }

    // Construir HTML del email
    const html = `
      <h1>New Quote Request</h1>
      <p><strong>Industry:</strong> ${data.industry || ''}</p>
      <p><strong>Name:</strong> ${data.firstName || ''} ${data.lastName || ''}</p>
      <p><strong>Email:</strong> ${data.email || ''}</p>
      <p><strong>Phone:</strong> ${data.phone || ''}</p>
      <p><strong>Business Name:</strong> ${data.businessName || ''}</p>
      <p><strong>Address:</strong> ${data.address || ''}, ${data.state || ''}</p>
      <h3>Work Types:</h3>
      <ul>${(data.workTypes || []).map(t => `<li>${t}</li>`).join('')}</ul>
      <h3>Contracting Types:</h3>
      <ul>${(data.contractingTypes || []).map(t => `<li>${t}</li>`).join('')}</ul>
      <h3>Business Characteristics:</h3>
      <ul>${(data.businessCharacteristics || []).map(c => `<li>${c}</li>`).join('')}</ul>
    `;

    // Intentar enviar email
    const { data: emailData, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: to || process.env.TO_EMAIL || 'santiagocardona97@gmail.com',
      subject: subject || `New Quote Request - ${data.industry || 'Unknown Industry'}`,
      html,
    });

    if (error) {
      console.error('⚠️ Error enviando email:', error);
      return res.status(500).json({ success: false, error: error.message || error });
    }

    console.log('📧 Email enviado con éxito:', emailData);
    return res.status(200).json({ success: true, message: 'Quote email sent successfully', data: emailData });

  } catch (err) {
    console.error('💥 Error en el servidor:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/chat', (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ success: false, error: 'Message is required' });
    }

    const response = findBestResponse(message);

    return res.json({ success: true, response });
  } catch (err) {
    console.error('💥 Chat error:', err);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

const employees = [
  { email: 'servando@anucleo.com', password: 'anucleo2025', name: 'Servando Velazquez', role: 'admin' },
  { email: 'yamil@anucleo.com', password: 'anucleo2025', name: 'Yamil Morales', role: 'agent' },
  { email: 'zonayad@anucleo.com', password: 'anucleo2025', name: 'Zonayad Akbar', role: 'agent' },
];

app.post('/api/employee/login', (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'Email and password are required' });
    }

    const employee = employees.find(
      (emp) => emp.email === email.toLowerCase() && emp.password === password
    );

    if (!employee) {
      return res.status(401).json({ success: false, error: 'Invalid email or password' });
    }

    return res.json({
      success: true,
      employee: {
        email: employee.email,
        name: employee.name,
        role: employee.role,
      },
    });
  } catch (err) {
    console.error('💥 Employee login error:', err);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});