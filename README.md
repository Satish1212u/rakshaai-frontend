# 🛡️ RakshaAI – Cyber Safety Assistant

🔗 Live Demo: https://raksha-ai-hazel.vercel.app/

RakshaAI is an AI-powered cybersecurity assistant that helps users analyze suspicious messages, detect threats, and take immediate action to stay safe online.

---

## 🚀 Features

- 🔍 AI-based threat analysis
- ⚠️ Risk level detection (Low / Medium / High)
- 📊 Threat scoring system
- 🧠 Explanation of what is happening
- 🚨 Immediate safety steps
- 💡 Prevention tips
- 📞 Reporting guidance
- 🔁 Smart retry system (handles API overload)
- ⚡ Multi-model AI fallback (high reliability)

---

## 🧠 How It Works

1. User enters a suspicious message (SMS, email, etc.)
2. Backend sends request to Gemini AI
3. AI analyzes and returns structured JSON
4. Frontend displays:
   - Threat explanation
   - Risk level
   - Action steps

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript
- Vercel (Hosting)

### Backend
- Node.js
- Express.js
- Render (Hosting)

### AI Integration
- Google Gemini API

---

## 🔥 Advanced Features

- ✅ Retry logic (handles API failures)
- ✅ Multi-model fallback (Gemini Flash + Pro)
- ✅ Error handling (no crash UX)
- ✅ Clean JSON parsing system

---

## 📸 Screenshots

_Add screenshots here_

---

## ⚙️ Installation (Local Setup)

```bash
git clone https://github.com/YOUR_USERNAME/rakshaai-frontend.git
cd rakshaai-frontend
npm install
