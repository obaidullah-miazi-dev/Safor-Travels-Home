import { Epilogue, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/shared/Navbar";
import Footer from "@/app/components/shared/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

export const metadata = {
  title: "Safor Travels",
  description: `
  Safor Travels is a Bangladesh-based travel agency dedicated to providing reliable, affordable, and personalized travel solutions. We aim to make every journey smooth, safe, and memorable by offering end-to-end travel services for individuals, families, and corporate clients.
With a strong focus on customer satisfaction, Safor Travels assists travelers from planning to completion, ensuring convenience, transparency, and professional support throughout the journey.

  `,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${epilogue.variable} antialiased dark:bg-black`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
