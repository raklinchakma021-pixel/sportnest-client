# SportNest 🏟️

SportNest is a full-stack sports facility booking management platform where users can explore, book, and manage sports venues like football turfs, badminton courts, basketball arenas, swimming pools, and tennis courts.

The platform is built using the MERN Stack with secure authentication, responsive UI, booking management, and facility CRUD operations.

---

## 🌐 Live Website

🔗 Live Link: https://sportnest-client-phi.vercel.app/

---

## 🎯 Project Purpose

The purpose of SportNest is to provide a modern and user-friendly sports facility reservation system where:

- Users can discover available sports facilities
- Authenticated users can book venues
- Facility owners can add and manage their facilities
- Users can track and cancel bookings
- Booking data is securely stored and managed

---

# ✨ Main Features

## 🔐 Authentication

- Email & Password Authentication
- Google Login Authentication
- Protected Private Routes
- JWT Authentication with HTTPOnly Cookies
- Persistent Login on Reload

---

## 🏟️ Facility Management

- Add New Sports Facility
- Update Facility Information
- Delete Facility
- Manage Personal Facilities
- Upload Facility Images

---

## 📅 Booking System

- Book Available Facilities
- Select Booking Date & Time Slot
- Automatic Total Price Calculation
- View My Bookings
- Cancel Booking

---

## 🔎 Search & Filter

- Search facilities by name
- Filter facilities by sport type
- MongoDB `$regex` and `$in` operators used

---

## 🎨 UI/UX Features

- Fully Responsive Design
- Modern Sports-Themed Interface
- Loading Spinner
- Custom 404 Page
- Toast Notifications
- Equal Height Responsive Cards
- Clean and Recruiter-Friendly Design

---

## 🧩 Extra Features

- Theme Toggle
- Framer Motion Animations
- Dynamic Featured Facilities Section
- Responsive Mobile Navigation

---

# 🛠️ Technologies Used

## Frontend

- Next.js
- React.js
- Tailwind CSS
- Axios
- React Hook Form
- React Hot Toast
- Framer Motion
- Swiper.js

---

## Backend

- Node.js
- Express.js
- MongoDB
- JWT
- Cookie Parser
- CORS
- Dotenv

---

## Authentication

- Firebase Authentication
- Google Authentication
- JWT Token Authentication

---

# 📦 NPM Packages Used

## Client Side

```bash
next
react
react-dom
tailwindcss
axios
react-hot-toast
react-hook-form
framer-motion
swiper
lucide-react
```

## Server Side

```bash
express
mongodb
jsonwebtoken
cookie-parser
cors
dotenv
```

---

# 📂 Database Collections

## Facilities Collection

```js
{
  name,
  facility_type,
  image,
  location,
  price_per_hour,
  capacity,
  available_slots,
  description,
  owner_email,
  booking_count
}
```

## Bookings Collection

```js
{
  facility_id,
  user_email,
  booking_date,
  time_slot,
  hours,
  total_price,
  status
}
```

---

# 🔑 Environment Variables

## Client

```env
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

## Server

```env
PORT=
MONGODB_URI=
JWT_SECRET=
CLIENT_URL=
```

---

# 🚀 Installation & Setup

## Clone Repository

```bash
git clone https://github.com/your-username/sportnest-client.git
git clone https://github.com/your-username/sportnest-server.git
```

---

## Install Dependencies

### Client

```bash
npm install
```

### Server

```bash
npm install
```

---

## Run Development Server

### Client

```bash
npm run dev
```

### Server

```bash
npm start
```

---

# 📱 Responsive Design

SportNest is fully optimized for:

- Mobile Devices
- Tablets
- Laptops
- Desktop Screens

---

# 🔒 Security Features

- JWT Authentication
- HTTPOnly Cookies
- Protected API Routes
- Environment Variable Protection
- Secure MongoDB Credentials

---

# 👨‍💻 Developer

Developed by [Raklin Chakma]

---

# 📄 License

This project is created for educational purposes.
