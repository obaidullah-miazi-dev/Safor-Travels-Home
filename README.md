# Safor Travels - Premium Travel Agency Homepage

## Project Overview

**Safor Travels** is a modern, responsive travel agency homepage designed to provide reliable, affordable, and personalized travel solutions. The project showcases a wide range of services including Hajj & Umrah packages, Visa assistance, Hotel bookings, and Trending destinations.

Built with **Next.js 16 (App Router)** and **Tailwind CSS v4**, this application focuses on performance, accessibility, and a premium user experience. It features dynamic GSAP animations, interactive search widgets, and a fully responsive layout that adapts seamlessly from mobile devices to large desktop screens.

## Live Demo

Live Link : [View Live Demo](https://safor-travels-home.vercel.app/)

![Safor Travels Homepage](/src/assets/safor-home.png)

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [GSAP](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/)
- **Language**: JavaScript (ES6+)
- **Icons**: [Lucide React](https://lucide.dev/) & [Tabler Icons](https://tabler.io/icons)
- **Fonts**: [Epilogue](https://fonts.google.com/specimen/Epilogue) (Google Fonts)
- **State Management**: React Hooks (`useState`, `useEffect`)

## Key Features

- **Responsive Design**: Fully optimized for Mobile, Tablet, and Desktop.
- **Advanced Animations**: Smooth scroll animations using GSAP ScrollTrigger.
- **Dark Mode**: Custom animated theme toggler with persistence.
- **Interactive Search**: Dynamic search widget for flights, hotels, and visas.
- **Service Showcases**: Dedicated sections for Hajj & Umrah, Visa Assistance, and Hotels.
- **Modal Views**: Detailed hotel information via interactive modals.
- **Modern UI**: Clean, whitespace-driven layout with premium aesthetics.

## Running the “Safor Travels” Project Locally

This guide explains how to run the Project Locally.

```bash
1. Clone the Repository
   git clone https://github.com/obaidullah-miazi-dev/Safor-Travels-Home.git

2. Navigate to the folder
   cd Safor-Travels-Home

3. Install dependencies
   npm install

4. Start the development server
   npm run dev

   Open http://localhost:3000 with your browser to see the result.
```

## 📂 Project Structure

```
src/
├── app/                  # Next.js App Router pages and layout
│   ├── components/       # Application-specific components
│   │   ├── shared/       # Navbar, Footer
│   │   ├── Hero.jsx      # Hero Section
│   │   ├── SearchWidget.jsx # Search Functionality
│   │   └── ...           # Other sections (Hotels, HajjUmrah, etc.)
│   ├── layout.js         # Root layout with Theme Provider
│   └── page.js           # Homepage entry point
├── components/           # Shared UI components
│   └── ui/               # Reusable UI elements
├── assets/               # Source assets (logos, images)
└── lib/                  # Utility functions
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
