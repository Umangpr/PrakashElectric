# Prakash Electric 🔌

A full‑stack web application built for **Prakash Electric**, the electrical appliance and repair shop owned by my father and uncle. The site features both a customer-facing frontend and a backend to handle form submissions and data management.

**Live Site:** [prakash-electric.vercel.app](https://prakash-electric.vercel.app/)  
**GitHub Repo:** [github.com/Umangpr/PrakashElectric](https://github.com/Umangpr/PrakashElectric)

---

## 🗂️ Repo Structure

```
PrakashElectric/
├── frontend/        # React + Vite client application
└── backend/         # Node.js/Express (API, form handling, etc.)
```

---

## 🚀 Technologies Used

- **Frontend:** React + Vite, styled with Tailwind CSS  
- **Backend:** Node.js and Express to handle contact forms or any server logic  
- **Deployment:** Frontend deployed on Vercel; backend hosted with environment‑based API endpoints

---

## 🧭 User Experience (Live Website)

Visiting the live site you’ll see a polished, mobile‑friendly layout showcasing:

- Home page introducing the shop  
- Services section explaining what Prakash Electric offers  
- “Get Quote” form for customer inquiries (handled by the backend)  
- Contact section with clickable phone number, email, and shop location 📍  

---

## 🔧 How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/Umangpr/PrakashElectric.git
cd PrakashElectric
```

### 2. Start Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend will run at e.g. `http://localhost:5173`

### 3. Start Backend
```bash
cd ../backend
npm install
npm run dev
```
Backend API might run on e.g. `http://localhost:5000`

---

## 🖇️ Connecting Frontend and Backend

If your frontend needs to send requests to backend (for example, form submissions), ensure you configure the API URL properly:

- During development: maybe `http://localhost:5000/api/...`
- In production: live frontend connected to backend as deployed or API endpoint

You can manage this via a `.env` file (e.g., `VITE_API_URL`) and fetch like:
```js
fetch(`${import.meta.env.VITE_API_URL}/contact`, { method: 'POST', body: formData })
```

---

## 📸 Screenshots (Optional)

Add customer‑facing visuals using markdown like:
```markdown
![Website Preview](./frontend/public/prakashelectric.png)
```

---

## 🔮 Future Roadmap

- ✅ Basic contact form & services info (done)
- 📍 Map integration to show shop location (can add)
- 💬 Customer reviews or gallery
- 🔐 Add admin backend or database (if needed)

---

## 🙏 Acknowledgements

This project is dedicated to supporting my **father and uncle’s** electrical shop. It’s my way of helping digitize and promote their business online.

---

## 📬 Get in Touch

Want a similar website? Feedback or ideas? Reach out:

- 📧 [umangprakash21@gmail.com](mailto:umangprakash21@gmail.com)  
- 🐙 GitHub: [@Umangpr](https://github.com/Umangpr)

---
