import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import FacilitiesPage from "./facilities/page";
import Testimonials from "@/components/Testimonials";
import SportsCategories from "@/components/SportsCategory";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SportNest",
  description: "Sports Facility Booking Management System",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
         <Toaster/>
        <Navbar/>
        {children}

    <FacilitiesPage/>

    <Testimonials/>
    <SportsCategories/>
        <Footer/>
        </body>
    </html>
  );
}
