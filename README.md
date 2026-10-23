# 🌆 IntrovertIRL Roleplay (IIRP) — Official Website

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: Custom](https://img.shields.io/badge/License-Custom-crimson.svg?style=for-the-badge)](LICENSE)

> **A whitelisted, immersive Roleplay web portal built for streamers, storytellers, and gaming legends.**  
> Driven by creators. Fueled by community. Inspired by you. `#TogetherWeRise`

---

## 📖 Overview

**IntrovertIRL RP** is a modern, responsive web application designed for the **IntrovertIRL Roleplay** community. Built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**, it delivers a sleek dark-mode glassmorphic interface, dynamic animations, and essential community hubs including rulebooks, subscription tiers, staff rosters, media showcases, and donation portals.

---

## ✨ Features

- **⚡ Modern Glassmorphic UI**: High-performance dark aesthetic featuring floating cards, animated gradient text, and dynamic backdrop blur effects.
- **🎮 Hero & Server Status**: Quick-action links to *Apply Now*, *Join Discord*, and real-time live server player count display.
- **📜 Server Rules Hub**: Clean, animated breakdown of core **Player Rules** (VYL, No Fail RP, No RDM/VDM, Metagaming) and **Admin Conduct Rules**.
- **👥 Staff & Team Showcase**: Dedicated leadership profiles highlighting Management, Developers, Senior Admins, and Design teams.
- **💎 VIP & Subscription Tiers**: Visual pricing cards for tiered perks (`Silver`, `Gold`, `Emerald`, `Diamond`).
- **🤝 Sponsor & Partner Showcase**: Grid display for brand partners and server sponsors.
- **🎥 Streamers & Media Hub**: Featured section for community content creators, YouTubers, and live streamers.
- **💳 Support & Donation Portal**: Community support page with transparent non-refundable donation terms.
- **📱 Fully Responsive**: Optimized for desktops, tablets, and mobile devices.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 18](https://reactjs.org/)** | Frontend component framework |
| **[TypeScript](https://www.typescriptlang.org/)** | Type safety and enhanced developer experience |
| **[Vite](https://vitejs.dev/)** | Fast next-generation frontend build tool |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first styling with custom keyframe animations |
| **[React Router v6](https://reactrouter.com/)** | Client-side routing and page navigation |
| **[Lucide React](https://lucide.dev/)** | Clean and lightweight modern UI icons |
| **[ESLint](https://eslint.org/)** | Code linting and style enforcement |

---

## 📁 Project Structure

```text
RP-Website/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   └── Navbar.tsx      # Navigation bar with dynamic blur & active routes
│   ├── pages/              # Route views
│   │   ├── Home.tsx        # Hero, About, Team & Server features
│   │   ├── Rules.tsx       # Player & Admin server rules
│   │   ├── Subscription.tsx# Subscription tiers (Silver, Gold, Emerald, Diamond)
│   │   ├── Media.tsx       # Content creators & YouTubers showcase
│   │   ├── Sponsors.tsx    # Brand sponsors & partners
│   │   └── Donate.tsx      # Donation policy & support button
│   ├── App.tsx             # Root router & layout configuration
│   ├── index.css           # Global Tailwind utilities & custom keyframes
│   ├── main.tsx            # Application entry point
│   └── vite-env.d.ts       # Vite TypeScript definitions
├── eslint.config.js        # ESLint configuration
├── index.html              # Main HTML template
├── package.json            # Scripts & project dependencies
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind theme extensions & animations
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (`v18.0.0` or higher recommended)
- [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/))
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/nexcoder-dev/RP-Website.git
cd RP-Website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173/` (or the port specified in your console).

### 4. Build for Production

To create an optimized production build:

```bash
npm run build
```

The compiled files will be located in the `dist/` directory.

### 5. Preview Production Build

```bash
npm run preview
```

### 6. Lint Code

```bash
npm run lint
```

---

## ⚙️ Customization Guide

### Updating Server Information
- **Server Name & Slogan**: Edit [`src/pages/Home.tsx`](src/pages/Home.tsx) in the Hero section.
- **Player Slots / Online Status**: Update the server status counter in [`src/pages/Home.tsx`](src/pages/Home.tsx).

### Updating Staff & Leadership
- Modify the `teamMembers` array in [`src/pages/Home.tsx`](src/pages/Home.tsx) with updated names, roles, avatars, and social links.

### Adding or Modifying Rules
- Adjust player and staff rules inside [`src/pages/Rules.tsx`](src/pages/Rules.tsx).

### Configuring Media Creators & Sponsors
- Add new YouTubers and stream links in [`src/pages/Media.tsx`](src/pages/Media.tsx).
- Add new sponsor logos and URLs in [`src/pages/Sponsors.tsx`](src/pages/Sponsors.tsx).

---

## 🤝 Contributing

Contributions to the **IntrovertIRL Roleplay** website are welcome! Please review our [**Contributing Guidelines**](contributing.md) and [`LICENSE`](LICENSE) before submitting code.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Sayan Backend Developer**

For commercial licensing inquiries: [gsa339402@gmail.com](mailto:gsa339402@gmail.com)

---

## 📜 License

Distributed under the **Commercial and Attribution License**. See [`LICENSE`](LICENSE) for more information.

---

<p align="center">
  Crafted with ❤️ for the <strong>IntrovertIRL Roleplay</strong> Community
</p>
