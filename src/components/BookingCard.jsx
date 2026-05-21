"use client";

import { Button, Card } from "@heroui/react";
import React, { useState } from "react";
import { DateField, Label } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const BookingCard = ({ facility }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  console.log(user)
  const [timesSlot, setTimesSlot] = useState(null);
//  console.log(timesSlot)
    const {_id, description, image, ownerEmail, timeSlots, capacity, pricePerHour, location, facilityName } = facility;

  const handleBooking = async () => {
    const bookingData = {
        userId: user?.id,
        userImage: user?.image,
        userName: user?.name,
        facilityId: _id,
        facilityName: facilityName,
        timesSlot: new Date(timesSlot),
        timeSlots,
        pricePerHour,
        image
    }

console.log(bookingData)
   const {data:tokenData} = await authClient.token()
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
        method: "POST",
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(bookingData),
    })

    const data = await res.json();
  console.log(data)
    toast.success("You booked successfully!")





  }


 
  return (
    <Card className="rounded-none border mt-5">
      <p className="text-sm text-muted">Starting from</p>
      <h2 className="text-3xl font-bold text-green-500">${pricePerHour}</h2>
      <p className="text-sm text-muted">per person</p>

      <DateField onChange={setTimesSlot} className="w-[256px]" name="date">
        <Label>TimeSlot</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      <Button onClick={handleBooking} className={"w-full rounded-none bg-green-500"}>Book Now</Button>
    </Card>
  );
};

export default BookingCard;