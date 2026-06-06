"use client";

import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
<section className="relative overflow-hidden min-h-screen flex items-center justify-center w-full py-8 md:py-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop"
          alt="Sports Banner"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
 <div className="relative z-10  mx-auto px-6 w-full flex justify-center">
    <div className="max-w-3xl text-white mx-auto text-center">
          <span className="inline-block bg-green-500/20 border border-green-400 text-green-300 px-5 py-2 rounded-full text-sm font-medium mb-6">
            Book Your Favorite Sports Venue
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Find The Best Sports Facilities Near You
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
            Discover premium football turfs, badminton courts, cricket grounds,
            gyms, and more. Book instantly and enjoy hassle-free sports
            experiences anytime.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link href="/facilities">
              <button className="bg-green-700 hover:bg-green-600 transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl">
                Explore Facilities
              </button>
            </Link>

            <Link href="/about">
              <button className="border border-white/40 hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-semibold">
                Learn More
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-4xl font-bold text-green-400">500+</h3>
              <p className="text-gray-300 mt-2">Bookings Completed</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-green-400">50+</h3>
              <p className="text-gray-300 mt-2">Premium Facilities</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-green-400">24/7</h3>
              <p className="text-gray-300 mt-2">Booking Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}