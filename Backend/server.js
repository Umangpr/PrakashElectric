// const express = require("express");
// const bodyParser = require("body-parser");
// const nodemailer = require("nodemailer");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static("public")); // Serve HTML files

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// const sendMail = (subject, html, res) => {
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: process.env.RECEIVER_EMAIL,
//     subject,
//     html,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error("Email error:", error);
//       return res.status(500).json({ success: false, message: "Email failed" });
//     }
//     res.status(200).json({ success: true, message: "Email sent" });
//   });
// };

// app.post("/contact", (req, res) => {
//   const { name, email, message } = req.body;
//   const html = `<h2>Contact Form</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`;
//   sendMail("New Contact Form Submission", html, res);
// });

// app.post("/bookservice", (req, res) => {
//   const { name, phone, device, issue, date } = req.body;
//   const html = `<h2>Book Service Request</h2><p><strong>Name:</strong> ${name}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Device:</strong> ${device}</p><p><strong>Issue:</strong> ${issue}</p><p><strong>Date:</strong> ${date}</p>`;
//   sendMail("New Book Service Submission", html, res);
// });

// app.listen(5000, () => console.log("Server running on http://localhost:5000"));


// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(bodyParser.json());

// app.post("/bookservice", async (req, res) => {
//   const {
//     name,
//     phone,
//     address,
//     serviceType,
//     preferredDate,
//     preferredTime,
//     description,
//   } = req.body;

//   if (!name || !phone || !serviceType) {
//     return res.status(400).json({ message: "Missing required fields." });
//   }

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.GMAIL_USER,
//       pass: process.env.GMAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: `"Service Booking" <${process.env.GMAIL_USER}>`,
//     to: process.env.GMAIL_USER,
//     subject: "New Service Booking Request",
//     html: `
//       <h2>Service Booking Details</h2>
//       <p><strong>Full Name:</strong> ${name}</p>
//       <p><strong>Phone Number:</strong> ${phone}</p>
//       <p><strong>Address:</strong> ${address || "Not provided"}</p>
//       <p><strong>Service Type:</strong> ${serviceType}</p>
//       <p><strong>Preferred Date:</strong> ${preferredDate || "Not provided"}</p>
//       <p><strong>Preferred Time:</strong> ${preferredTime || "Not provided"}</p>
//       <p><strong>Description:</strong> ${description || "Not provided"}</p>
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("Email error:", error);
//     res.status(500).json({ message: "Failed to send email." });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`✅ Server running at http://localhost:${PORT}`);
// });

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
