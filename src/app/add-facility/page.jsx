"use client"
import { authClient } from "@/lib/auth-client";
// const dns = require("node:dns");
// dns.setServers(["8.8.8.8", "8.8.4.4"]);
import { Button, FieldError, Input, Label, ListBox, TextField , Select, TextArea} from "@heroui/react";
// import { useSession } from "@better-auth/react";
export default function AddFacilityPage() {
  const { data: session } = authClient.useSession();
  const user = session?.user;


  const ownerEmail = session?.user?.email || "";


      const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const facility = Object.fromEntries(formData.entries())

        console.log(facility)
  facility.ownerEmail = ownerEmail;
           const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(facility)
        })

        const data = await res.json()
  console.log(data)

    
      }
  return (
    <div className="w-10/12 mx-auto">

    
<form onSubmit={onSubmit} className="p-10 space-y-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Facility Name */}
    <div className="md:col-span-2">
      <TextField name="facilityName" isRequired>
        <Label>Facility Name</Label>
        <Input
          placeholder="Football Turf"
          className="rounded-2xl"
        />
        <FieldError />
      </TextField>
    </div>

    {/* Facility Type */}
    <TextField name="facilityType" isRequired>
      <Label>Facility Type</Label>
      <Input
        placeholder="Indoor / Outdoor"
        className="rounded-2xl"
      />
      <FieldError />
    </TextField>

    {/* Location */}
    <TextField name="location" isRequired>
      <Label>Location</Label>
      <Input
        placeholder="Dhaka, Bangladesh"
        className="rounded-2xl"
      />
      <FieldError />
    </TextField>

    {/* Price Per Hour */}
    <TextField name="pricePerHour" type="number" isRequired>
      <Label>Price Per Hour</Label>
      <Input
        type="number"
        placeholder="500"
        className="rounded-2xl"
      />
      <FieldError />
    </TextField>

    {/* Capacity */}
    <TextField name="capacity" type="number" isRequired>
      <Label>Capacity</Label>
      <Input
        type="number"
        placeholder="20"
        className="rounded-2xl"
      />
      <FieldError />
    </TextField>

    {/* Available Time Slots */}
    <div className="md:col-span-2">
      <TextField name="timeSlots" isRequired>
        <Label>Available Time Slots</Label>
        <Input
          placeholder="6AM - 9AM, 4PM - 10PM"
          className="rounded-2xl"
        />
        <FieldError />
      </TextField>
    </div>

    {/* Owner Email - Auto Filled */}
    <div className="md:col-span-2">
      <TextField
        name="ownerEmail"
   value={ownerEmail}
        isReadOnly
      >
        <Label>Owner Email</Label>
        <Input
          className="rounded-2xl bg-gray-100 cursor-not-allowed"
        />
        <FieldError />
      </TextField>
    </div>

    {/* Image Upload */}
    <div className="md:col-span-2">
      <TextField name="image" >
        <Label>Facility Image URL</Label>
        <Input
          type="text"
         
          className="rounded-2xl"
        />
        <FieldError />
      </TextField>

      <p className="text-sm text-gray-500 mt-2">
        Upload image to ImgBB or PostImage before submitting.
      </p>
    </div>

    {/* Description */}
    <div className="md:col-span-2">
      <TextField name="description" isRequired>
        <Label>Description</Label>
        <TextArea
          placeholder="Describe your facility..."
          className="rounded-3xl"
        />
        <FieldError />
      </TextField>
    </div>
  </div>

  {/* Submit Button */}
  <Button
    type="submit"
    variant="outline"
    className="rounded-none w-full bg-green-700 text-white"
  >
    Add Facility
  </Button>
</form>

    </div>
  )
}
