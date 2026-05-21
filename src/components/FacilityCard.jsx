import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";

const FacilityCard =({facility})=> {
console.log(facility)
    const {_id, description, image, ownerEmail, timeSlots, capacity, pricePerHour, location, facilityName } = facility;


   return(

       <div className="border p-4">
      
      <Image
        alt={facilityName}
      src={image ? image : "/placeholder.jpg"}
        height={400}
        width={400}
      />

      <div className="p-2">
        <div className="flex items-center gap-1">
          <LuMapPin /> <span>{location}</span>
        </div>
        <div className="flex justify-between">
          <div>
            <div>
              <h2 className="text-xl font-bold">{facilityName}</h2>
            </div>
            <div className="flex gap-1 items-center">
              <FaRegCalendar /> {timeSlots}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold">$ {pricePerHour}</h3>
          </div>
        </div>
        <Link href={`/facilities/${_id}`}><Button variant="ghost" className={'mt-1 text-green-700'}> <FiExternalLink/> Book Now</Button></Link>
      </div>
    </div>
   )
}

export default FacilityCard;