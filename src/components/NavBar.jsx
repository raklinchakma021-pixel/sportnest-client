"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Avatar } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    await authClient.signOut();
    setProfileOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/assets/logo.png" alt="Logo" width={100} height={100} />
            <span className="text-xl font-bold text-green-700">SportNest</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/facilities" className="nav-link">All Facilities</Link>

            {user && (
              <>
                <Link href="/my-bookings" className="nav-link">My Bookings</Link>
                <Link href="/add-facility" className="nav-link">Add Facility</Link>
                <Link href="/manage-my-facilities" className="nav-link">
                  Manage My Facilities
                </Link>
              </>
            )}
          </div>

          {/* Right Side */}
          <div className="hidden lg:block">
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2"
                >
                 
                  <Avatar src={user.image || ""} name={user.name} />
                  <ChevronDown
                    size={18}
                    className={`transition ${profileOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-56 bg-white border rounded-lg shadow-lg overflow-hidden">
                    <DropdownLink href="/my-bookings">My Bookings</DropdownLink>
                    <DropdownLink href="/add-facility">Add Facility</DropdownLink>
                    <DropdownLink href="/manage-my-facilities">
                      Manage My Facilities
                    </DropdownLink>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-2">
              <Link
                href="/login"
                className="bg-green-700 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-medium"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-green-700 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-medium"
              >
                Signup
              </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t py-4 space-y-3">
            <MobileLink href="/" onClick={setMobileOpen}>Home</MobileLink>
            <MobileLink href="/facilities" onClick={setMobileOpen}>
              All Facilities
            </MobileLink>

            {user ? (
              <>
                <MobileLink href="/my-bookings" onClick={setMobileOpen}>
                  My Bookings
                </MobileLink>
                <MobileLink href="/add-facility" onClick={setMobileOpen}>
                  Add Facility
                </MobileLink>
                <MobileLink href="/manage-facilities" onClick={setMobileOpen}>
                  Manage My Facilities
                </MobileLink>
                <button
                  onClick={handleLogout}
                  className="w-full text-left text-red-600 font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex gap-2">
              <MobileLink href="/login" onClick={setMobileOpen}>
                Login
              </MobileLink>
              <MobileLink href="/signup" onClick={setMobileOpen}>
                Signup
              </MobileLink>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

/* ---------- Reusable Components ---------- */

function DropdownLink({ href, children }) {
  return (
    <Link
      href={href}
      className="block px-4 py-3 hover:bg-gray-100"
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={() => onClick(false)}
      className="block font-medium text-gray-700"
    >
      {children}
    </Link>
  );
}