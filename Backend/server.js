const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Generic Send Mail Handler
const sendEmail = async (subject, html, res) => {
  const mailOptions = {
    from: `"No Reply" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_RECEIVER || process.env.GMAIL_USER, // fallback
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (err) {
    console.error("Email sending failed:", err.message);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
};

// 📬 Contact Form Endpoint
app.post("/contact", (req, res) => {
  const { name, phone, message } = req.body;
  if (!name || !phone || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const html = `
    <h2>Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone number:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  sendEmail("New Contact Message", html, res);
});

// 🛠️ Service Booking Form Endpoint
app.post("/bookservice", (req, res) => {
  const { name, phone, address, serviceType, preferredDate, preferredTime, description } = req.body;

  if (!name || !phone || !serviceType) {
    return res.status(400).json({ message: "Name, Phone, and Service Type are required." });
  }

  const html = `
    <h2>Service Booking Request</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${address || "Not provided"}</p>
    <p><strong>Service Type:</strong> ${serviceType}</p>
    <p><strong>Preferred Date:</strong> ${preferredDate || "Not provided"}</p>
    <p><strong>Preferred Time:</strong> ${preferredTime || "Not provided"}</p>
    <p><strong>Description:</strong> ${description || "Not provided"}</p>
  `;

  sendEmail("New Service Booking", html, res);
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
