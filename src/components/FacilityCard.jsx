import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";

const FacilityCard = ({ facility }) => {
  const {
    _id,
    image,
    timeSlots,
    pricePerHour,
    location,
    facilityName,
  } = facility;

  return (
    <div className="border p-4 rounded-xl">
      
      {/* Facility Image */}
      <div className="relative w-full h-60">
        <Image
          src={image}
          alt={facilityName}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="p-2">
        <div className="flex items-center gap-1 mt-2">
          <LuMapPin />
          <span>{location}</span>
        </div>

        <div className="flex justify-between items-center mt-2">
          <div>
            <h2 className="text-xl font-bold">{facilityName}</h2>

            <div className="flex gap-1 items-center text-sm text-gray-600">
              <FaRegCalendar />
              {timeSlots}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold">
              $ {pricePerHour}
            </h3>
          </div>
        </div>

        <Link href={`/facilities/${_id}`}>
          <Button
            variant="ghost"
            className="mt-3 text-green-700"
          >
            <FiExternalLink />
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FacilityCard;