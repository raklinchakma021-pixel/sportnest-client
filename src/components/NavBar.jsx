"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

// Replace this with your auth state
const isLoggedIn = true;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "All Facilities",
      href: "/facilities",
    },
    {
      name: "My Bookings",
      href: "/my-bookings",
      private: true,
    },
    {
      name: "Add Facility",
      href: "/add-facility",
      private: true,
    },
    {
      name: "Manage My Facilities",
      href: "/manage-facilities",
      private: true,
    },
  ];

  return (
    <nav className="w-full border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={150}
              height={150}
            />
            <h1 className="text-2xl font-bold text-green-700">
              SportNest
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              if (link.private && !isLoggedIn) return null;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-green-700 font-medium transition"
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full hover:bg-gray-200 transition"
                >
                  <Image
                    src="https://i.ibb.co/4pDNDk1/avatar.png"
                    alt="Profile"
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                  <ChevronDown size={18} />
                </button>

                {/* Dropdown */}
                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-60 bg-white border rounded-xl shadow-lg overflow-hidden">
                    <Link
                      href="/my-bookings"
                      className="block px-5 py-3 hover:bg-gray-100"
                    >
                      My Bookings
                    </Link>

                    <Link
                      href="/add-facility"
                      className="block px-5 py-3 hover:bg-gray-100"
                    >
                      Add Facility
                    </Link>

                    <Link
                      href="/manage-facilities"
                      className="block px-5 py-3 hover:bg-gray-100"
                    >
                      Manage My Facilities
                    </Link>

                    <button className="w-full text-left px-5 py-3 text-red-500 hover:bg-red-50">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="bg-green-700 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-medium transition"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-3 border-t">
            {navLinks.map((link) => {
              if (link.private && !isLoggedIn) return null;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-700 hover:text-green-700 font-medium"
                >
                  {link.name}
                </Link>
              );
            })}

            {isLoggedIn ? (
              <>
                <button className="text-red-500 font-medium">
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="inline-block bg-green-700 text-white px-5 py-2 rounded-lg"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}