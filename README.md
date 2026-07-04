# 🛒 NonBazar — Multivendor eCommerce Platform

A **production-ready, full-stack multivendor eCommerce platform** built from scratch with the **MERN stack + TypeScript**. It supports customers, sellers, and admins — complete with authentication, product & category management, cart/wishlist, coupons & deals, order management, and dual payment gateways (Razorpay + Stripe).

This project is designed for developers who want to learn and master modern web development by building a real-world, scalable application.

---

## ✨ Key Features

- 👥 **User & Seller authentication** — OTP-based login and JWT-secured sessions
- 📦 **Product & Category management** — full CRUD for sellers and admins
- 🛒 **Cart & Wishlist** functionality
- 🎟️ **Coupon & Deal system**
- 💳 **Order & Payment flow** with **Razorpay** and **Stripe**
- 📊 **Admin Dashboard** & **Seller Dashboard**
- 📬 **Email verification & password reset** via Nodemailer
- 📱 **Fully responsive design** with a modern UI

---

## 🧰 Tech Stack

### 🖥️ Frontend
| Technology | Purpose |
|------------|---------|
| ⚛️ **React (Vite)** | UI library + fast build tooling |
| 🔐 **TypeScript** | Type safety |
| 🧠 **Redux Toolkit** | State management |
| 🎨 **Material UI (MUI)** | Component library |
| 💅 **Tailwind CSS** | Utility-first styling |
| ✅ **Formik + Yup** | Form handling & validation |

### ⚙️ Backend
| Technology | Purpose |
|------------|---------|
| 🌐 **Node.js + Express.js** | REST API server |
| 🍃 **MongoDB + Mongoose** | Database & ODM |
| 🔐 **JWT** | Authentication |
| 📬 **Nodemailer** | Email verification & OTP delivery |
| 💳 **Razorpay + Stripe** | Payment integration |
| 🔒 **bcrypt** | Password hashing |

---

## 📁 Project Structure

```
ecommerce/
├── backend/
│   ├── src/
│   │   ├── config/        # Database connection
│   │   ├── controller/    # Request handlers (auth, user, seller, admin)
│   │   ├── domian/        # Domain enums (UserRole, AccountStatus)
│   │   ├── middlewear/    # Auth middleware
│   │   ├── model/         # Mongoose schemas (User, Seller, Cart, Address, OtpCode)
│   │   ├── routes/        # API route definitions
│   │   ├── service/       # Business logic
│   │   ├── util/          # Helpers (JWT, OTP generation, email)
│   │   └── index.js       # App entry point
│   ├── .env               # Environment variables (not committed)
│   └── package.json
└── frontend/              # React + Vite client
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18+ recommended)
- **MongoDB** (local instance or MongoDB Atlas)
- A **Gmail account** with an App Password (for Nodemailer)

### 1. Clone the repository
```bash
git clone (https://github.com/nonadityaraj/NonKart.git)
cd ecommerce
```

### 2. Backend setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:
```env
MONGO_URI=your_mongodb_connection_string
JWT_KEY=your_jwt_secret
USER_EMAIL=your_gmail_address
USER_EMAIL_PASSWORD=your_gmail_app_password
```

Start the backend (runs on **http://localhost:5000**):
```bash
npm run dev
```

### 3. Frontend setup
```bash
cd ../frontend
npm install
npm run dev
```

---

## 📡 API Endpoints (Backend)

Base URL: `http://localhost:5000`

### Auth — `/api/auth`
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/signup` | Create a new user account |
| `POST` | `/sent/login-signup-otp` | Send a login/signup OTP via email |
| `POST` | `/signin` | Log in using email + OTP |

### User — `/api/user`
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/profile` | Get the logged-in user's profile (JWT required) |

### Seller — `/api/seller`
Seller registration, authentication, and management.

### Admin — `/api/admin`
Admin-level management routes.

> **Authentication:** Protected routes expect a `Bearer <token>` header:
> ```
> Authorization: Bearer <your_jwt_token>
> ```

---

## 🔐 Authentication Flow

1. **Signup** — `POST /api/auth/signup` with `{ userName, email, password }` → creates the user and returns a JWT.
2. **Request OTP** — `POST /api/auth/sent/login-signup-otp` with `{ email }` → generates a 6-digit OTP and emails it.
3. **Login** — `POST /api/auth/signin` with `{ email, otp }` → verifies the OTP and returns a JWT + role.

---

## 🛠️ Available Scripts (Backend)

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the server with nodemon (auto-reload) |

---

## ⚠️ Security Notes

- **Never commit your `.env` file** — keep MongoDB credentials, JWT secret, and email app passwords out of version control.
- Use a dedicated **Gmail App Password** (not your account password) for Nodemailer.
- Rotate any credentials that may have been exposed.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the **ISC License**.
