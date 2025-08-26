# 🚖 Ride Booking Application

A full-stack ride booking system (like Uber/Pathao) built with **Express.js, MongoDB, JWT Authentication, React + Vite + Redux Toolkit Query (RTK Query), and Tailwind CSS**.  
This project supports **Rider, Driver, and Admin dashboards** with role-based authentication.

---

## ✨ Features

### 🔐 Authentication
- JWT + HttpOnly Cookie-based secure login/register/logout  
- Role-based access (Rider, Driver, Admin)  
- CSRF protection enabled  

### 🧑 Rider
- Request a ride  
- View ride history  
- Cancel rides  
- User profile management  

### 🚗 Driver
- Accept/Reject ride requests  
- Update ride status (picked, in-transit, completed)  
- Driver profile management (vehicle, phone, password update)  
- Earnings & ride history  

### 🛠️ Admin
- User management (block/unblock riders, approve/suspend drivers)  
- Ride oversight with search & filter tools  
- Analytics dashboard (users, rides, drivers, revenue)  

---

## 🛠️ Tech Stack

**Backend**  
- Node.js + Express  
- MongoDB + Mongoose  
- JWT, bcrypt  
- Vercel Deployment  

**Frontend**  
- React + Vite + TypeScript  
- Redux Toolkit Query (RTK Query)  
- TailwindCSS + ShadCN UI  
- Deployed on Netlify / Vercel  

---

## 🚀 Getting Started (Local Setup)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/ride-booking-app.git
cd ride-booking-app
