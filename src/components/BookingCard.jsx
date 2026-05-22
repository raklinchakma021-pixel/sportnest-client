"use client";

import { Button, Card } from "@heroui/react";
import React, { useState } from "react";
import { DateField, Label } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const BookingCard = ({ facility }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [timesSlot, setTimesSlot] = useState(null);

  const {
    _id,
    image,
    timeSlots,
    pricePerHour,
    facilityName,
  } = facility;

  const handleBooking = async () => {
    if (!timesSlot) {
      return toast.error("Please select a booking date");
    }

    // example total price logic
    const totalHours = 1;
    const totalPrice = Number(pricePerHour) * totalHours;

    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,

      facilityId: _id,
      facilityName,
      image,

      timesSlot: new Date(timesSlot),
      timeSlots,

      pricePerHour,

      // NEW
      totalHours,
      totalPrice,
      status: "pending",
    };

    console.log(bookingData);

    const { data: tokenData } = await authClient.token();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/booking`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(bookingData),
      }
    );

    const data = await res.json();

    console.log(data);

    if (data.insertedId || data.success) {
      toast.success("You booked successfully!");
    } else {
      toast.error("Booking failed");
    }
  };

  return (
    <Card className="rounded-none border mt-5 p-5 space-y-4">
      <div>
        <p className="text-sm text-muted">Starting from</p>

        <h2 className="text-3xl font-bold text-green-500">
          ${pricePerHour}
        </h2>

        <p className="text-sm text-muted">per person</p>
      </div>

      {/* Total Price */}
      <div className="border-y py-3">
        <p className="text-sm text-gray-500">Total Price</p>

        <h3 className="text-2xl font-bold text-cyan-500">
          ${pricePerHour}
        </h3>
      </div>

      <DateField
        onChange={setTimesSlot}
        className="w-full"
        name="date"
      >
        <Label>TimeSlot</Label>

        <DateField.Group>
          <DateField.Input>
            {(segment) => (
              <DateField.Segment segment={segment} />
            )}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      {/* Default Status */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Status</span>

        <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-semibold capitalize">
          pending
        </span>
      </div>

      <Button
        onClick={handleBooking}
        className="w-full rounded-none bg-green-500 text-white"
      >
        Book Now
      </Button>
    </Card>
  );
};

export default BookingCard;