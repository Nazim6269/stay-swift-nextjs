# 🏡 Airbnb Clone

A modern **Airbnb-style accommodation booking platform** built using **Next.js**, **NextAuth**, and **MongoDB**.  
This project demonstrates full-stack development with authentication (social + credentials), dynamic listings, and responsive UI using **Tailwind CSS** and **ShadCN**.

![Airbnb Clone Preview](https://stay-swift-nextjs.vercel.app/)

---

## 🚀 Features

- 🔐 **NextAuth Authentication** – Supports both **Google** and **Email/Password** logins  
- 🏘️ **Dynamic Property Listings** – Display accommodation cards with images, prices, and locations  
- 🧭 **Search & Filter** – Filter properties by location, price, and date range  
- 🗓️ **Date Picker Integration** – Choose check-in and check-out dates  
- 💬 **User Dashboard** – View and manage your own listings or favorites  
- 💖 **Favorites (Wishlist)** – Save and remove favorite properties  
- 🌙 **Responsive UI** – Fully optimized for all devices  
- ⚙️ **Server Actions** – Uses Next.js App Router server components for better performance  
- 📦 **MongoDB Integration** – Stores user data, listings, and favorites  

---

## 🧰 Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Framework** | Next.js 15 (App Router) |
| **Authentication** | NextAuth (Google, Credentials) |
| **Database** | MongoDB (via Mongoose or Prisma) |
| **Styling** | Tailwind CSS + ShadCN UI |
| **State Management** | React Hooks / Context |
| **Hosting** | Vercel |
| **Language** | TypeScript |

---

## ⚙️ Installation

### Clone the repository
```bash
git clone https://github.com/Nazim6269/stay-swift-nextjs.git
cd stay-swift-nextjs
```

## Install Dependencies
```
yarn install
# or
npm install
```

## Run Development Server
```
yarn dev
# or
npm run dev
```

## Open your Browser  
Visit: [http://localhost:3000](http://localhost:3000)

## Project Structure
```
.
├── app/
│   ├── (auth)/                  # Authentication pages (login, register)
│   ├── (listings)/              # Property listings and details
│   ├── (dashboard)/             # User dashboard
│   ├── api/                     # API routes (NextAuth, listings, favorites)
│   ├── layout.tsx               # Global layout and providers
│   └── page.tsx                 # Home page
│
├── components/
│   ├── ui/                      # Reusable ShadCN UI components
│   ├── navbar/                  # Navbar with login/logout
│   ├── search/                  # Search bar and filters
│   ├── cards/                   # Listing and favorite cards
│   └── forms/                   # Login/register forms
│
├── lib/
│   ├── auth.ts                  # NextAuth configuration
│   ├── db.ts                    # Database connection setup
│   ├── actions/                 # Server actions for listings & favorites
│   └── utils.ts                 # Helper utilities
│
├── public/                      # Static assets (images, icons)
├── styles/                      # Global styles
├── tailwind.config.js           # Tailwind CSS config
├── package.json
└── README.md
```
## 📸 Screenshots
| Home Page                                 | Property Details                                | Login                                       |
| ----------------------------------------- | ----------------------------------------------- | ------------------------------------------- |
| ![Home](https://your-home-screenshot.com) | ![Details](https://your-details-screenshot.com) | ![Login](https://your-login-screenshot.com) |

		
## 💡 Key Functionalities

- Social Login: Google OAuth integration via NextAuth
- Credential Login: Secure email-password authentication
- Favorites System: Save and manage favorite listings per user
- Dynamic Listings: Render properties fetched from the database
- Date Picker: Interactive calendar for booking periods
- Server Components: Improved performance with Next.js App Router
- Mobile-First Design: Optimized layout for all screen sizes

## 🔮 Future Enhancements

- 💳 Integrate Stripe for payments
- 🧭 Add Map view for listings (Google Maps / Leaflet)
- 🧑‍💼 Add Host Dashboard for adding/editing properties
- 🕹️ Add Booking confirmation and history page
- 🌍 Multi-language and currency support

## 💻 Deployment

Deployed on Vercel for fast, serverless deployment.

🔗 Live Demo: [https://stay-swift-nextjs.vercel.app](https://stay-swift-nextjs.vercel.app/)

## 👨‍💻 Author

Nazim Uddin  
Front-End Developer | React & Next.js Enthusiast

- 🌐 [Portfolio](https://portfolio-nextjs-one-tau.vercel.app/)
- 💼 [LinkedIn](https://www.linkedin.com/in/nazim-uddin-23a93a216/)
- 🐙 [GitHub](https://github.com/Nazim6269)
