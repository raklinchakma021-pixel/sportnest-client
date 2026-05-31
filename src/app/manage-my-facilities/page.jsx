"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button, Card } from "@heroui/react";
import { EditModal } from "@/components/EditModal";
import { DeleteAlert } from "@/components/DeleteAlert";
import BookingCard from "@/components/BookingCard";

export default function ManageMyFacilitiesPage() {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFacilities = async () => {
    if (!user?.email) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/manage-my-facilities/${user.email}`
      );

      const data = await res.json();

      setFacilities(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFacilities();
  }, [user]);

  const handleDelete = async (id) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this facility?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/manage_facilities/${id}/${user.email}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.deletedCount > 0) {
        setFacilities((prev) =>
          prev.filter((facility) => facility._id !== id)
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) {
    return (
      <div className="py-20 text-center">
        Please sign in to manage facilities.
      </div>
    );
  }

  return (
    <section className="w-11/12 max-w-7xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">
        Manage My Facilities
      </h1>

      {loading ? (
        <div className="text-center py-10">
          Loading facilities...
        </div>
      ) : facilities.length === 0 ? (
        <div className="text-center py-10">
          No facilities found.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <Card key={facility._id}>
              <div className="space-y-4">
                <img
                  src={facility.image}
                  alt={facility.facilityName}
                  className="w-full h-56 object-cover rounded-lg"
                />

                <div>
                  <h2 className="text-xl font-semibold">
                    {facility.facilityName}
                  </h2>

                  <p className="text-default-500">
                    {facility.facilityType}
                  </p>
                </div>

                <div className="space-y-1">
                  <p>
                    <strong>Location:</strong>{" "}
                    {facility.location}
                  </p>

                  <p>
                    <strong>Price:</strong> ৳
                    {facility.pricePerHour}/hour
                  </p>

                  <p>
                    <strong>Capacity:</strong>{" "}
                    {facility.capacity}
                  </p>
                </div>

                <p className="text-sm text-default-500 line-clamp-3">
                  {facility.description}
                </p>
  <BookingCard facility={facility}/>
                <div className="flex gap-3">
                  <EditModal facility={facility}/>

                  <DeleteAlert facility={facility}/>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}