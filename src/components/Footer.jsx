"use client";

import Link from "next/link";
import Image from "next/image";

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/logo.png"
                alt="SportNest Logo"
                width={150}
                height={150}
                className="rounded-full"
              />

              <h2 className="text-2xl font-bold text-white">
                SportNest
              </h2>
            </div>

            <p className="text-sm leading-7 text-gray-400">
              SportNest helps users discover, book, and manage sports
              facilities easily and efficiently.
            </p>
          </div>

       

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Contact Info
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-green-500 mt-1" size={18} />
                <p>Chattogram, Bangladesh</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-green-500" size={18} />
                <p>+880 1234-567890</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-green-500" size={18} />
                <p>support@sportnest.com</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Follow Us
            </h3>

            <div className="flex items-center gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="bg-gray-800 hover:bg-green-600 transition p-3 rounded-full"
              >
                <FaFacebook size={20} />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                className="bg-gray-800 hover:bg-green-600 transition p-3 rounded-full"
              >
                <FaInstagram size={20} />
              </Link>

              <Link
                href="https://twitter.com"
                target="_blank"
                className="bg-gray-800 hover:bg-green-600 transition p-3 rounded-full"
              >
                <FaTwitter size={20} />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="bg-gray-800 hover:bg-green-600 transition p-3 rounded-full"
              >
                <FaLinkedin size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} SportNest. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}