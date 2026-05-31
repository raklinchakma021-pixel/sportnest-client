import { BookingCancelAlert } from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  const bookings = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-5">My Bookings</h1>

      <div className="space-y-5">
        {bookings.map((booking) => {
          

          return (
            <div
              key={booking._id}
              className="flex flex-col md:flex-row gap-5 border rounded-xl p-5 shadow-sm"
            >
              <Image
                src={booking.image}
                alt={booking.facilityName}
                height={200}
                width={200}
                className="rounded-lg object-cover h-[200px] w-full md:w-[250px]"
              />

              <div className="flex-1 space-y-2">
                <h1 className="font-bold text-2xl">
                  {booking.facilityName}
                </h1>

                <p className="text-gray-600">
                  {new Date(booking.timesSlot).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </p>

                <p>
                  <span className="font-semibold">Booking ID:</span>{" "}
                  {booking._id}
                </p>

                {/* Status */}
                <p>
                  <span className="font-semibold">Status:</span>{" "}
                  <span className="capitalize text-yellow-500 font-bold">
                    {booking.status || "pending"}
                  </span>
                </p>

                {/* Price per hour */}
                <p className="text-lg">
                  <span className="font-semibold">Price Per Hour:</span> $
                  {booking.pricePerHour}
                </p>

             

                <div className="pt-3">
                  <BookingCancelAlert bookingId={booking._id} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyBookingPage;