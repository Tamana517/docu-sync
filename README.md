<!-- ===================== BANNER ===================== -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:4facfe,100:00f2fe&height=200&section=header&text=DocuSync%20🚀&fontSize=40&fontColor=ffffff&animation=fadeIn&fontAlignY=35"/>
</p>

<p align="center">
  <b>Collaborative Document Editor with Auto-Save & Version Control</b>
</p>

---

<!-- ===================== BADGES ===================== -->
<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React-blue.svg"/>
  <img src="https://img.shields.io/badge/Backend-Node.js-green"/>
  <img src="https://img.shields.io/badge/Database-MongoDB-brightgreen"/>
  <img src="https://img.shields.io/badge/Auth-JWT-orange"/>
  <img src="https://img.shields.io/badge/Status-Active-success"/>
  <img src="https://img.shields.io/badge/License-MIT-green"/>
</p>

---

## 🌐 Overview

**DocuSync** is a full-stack document editor built using the MERN stack.
It allows users to create, edit, and manage documents with **auto-save functionality**, **version history**, and **secure authentication**.

---

## ⚡ Features

* 🔐 JWT-based Authentication (Signup/Login)
* 📝 Create & Edit Documents
* ⏱ Auto-Save (no manual save required)
* 🕓 Version History with Restore
* ✏️ Rename Documents
* 🎨 Clean and minimal UI
* 🚪 Logout functionality

---

## 🛠 Tech Stack

### 💻 Frontend

* React.js
* Axios

### ⚙️ Backend

* Node.js
* Express.js

### 🗄 Database

* MongoDB Atlas

### 🔐 Authentication

* JSON Web Tokens (JWT)

---

## 📂 Project Structure

```
docu-sync/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   └── public/
│
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```
git clone https://github.com/YOUR_USERNAME/docu-sync.git
cd docu-sync
```

---

### 2️⃣ Setup Backend

```
cd backend
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run server:

```
node server.js
```

---

### 3️⃣ Setup Frontend

```
cd frontend
npm install
npm start
```

---

## 🧪 Usage

1. Sign up or log in
2. Create a new document
3. Edit content (auto-saves automatically)
4. View and restore previous versions

---

## 🔒 Security

* Environment variables used for sensitive data
* Database credentials are not exposed
* JWT used for secure authentication

---

## 📈 Future Improvements

* 👥 Real-time collaboration (WebSockets)
* 🌙 Dark mode
* 📁 Folder organization
* 🔍 Search functionality

---

## 👨‍💻 Author  
Tamana

## 📜 License

This project is licensed under the MIT License.

---

<p align="center"> ⭐ If you like this project, consider giving it a star! </p> 

---
