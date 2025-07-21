# 🏠 NestIn - Room Booking Platform

Welcome to **NestIn** — a modern room booking web application where users can **search for places**, 
**add their own listings**, **leave reviews**, and even **explore rooms on a map** powered by **Lifey**. Built with the **MERN Stack** 
(MongoDB, Express, Node.js, and Vanilla JS for frontend), it's a fully functional platform designed for real-world use.

🌐 **Live Demo:** [https://nestin-qd8j.onrender.com](https://nestin-qd8j.onrender.com)

---

## 🚀 Features

- 🔍 **Search Rooms** – Easily filter and browse listings by location and keywords.
- 🧭 **Map Integration** – See listings on a dynamic map powered by Lifey Maps.
- 🏡 **Add New Listings** – Login and post your own rooms or properties for rent.
- 📝 **Reviews** – Leave feedback for any listing after login.
- 👤 **User Authentication** – Secure login and register using sessions.
- 📸 **Image Uploads** – Upload photos of your listings.

---

## 🛠️ Tech Stack

**Frontend:**
- HTML5
- CSS3
- JavaScript (Vanilla)

**Backend:**
- Node.js
- Express.js
- MongoDB (via MongoDB Atlas)
- EJS (templating engine)

**Other Tools:**
- Lifey Map API (for maps & location)
- Render (deployment)
- Multer (image uploads)
- bcrypt (password hashing)
- connect-mongo & express-session (authentication)

---

## 📂 Folder Structure

```plaintext
.
├── public/             # Static files (CSS, JS, images)
├── views/              # EJS templates
├── models/             # Mongoose models (User, Listings, Review)
├── routes/             # Express routes
├── controllers/        # Business logic
├── utils/              # Helper functions
├── .env                # Environment variables
└── server.js           # Entry point
