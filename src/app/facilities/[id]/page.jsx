import { EditModal } from "@/components/EditModal";
import Image from "next/image";
import { BiMoney } from "react-icons/bi";
import { FaRegCalendar } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

const FacilityDetailsPage = async ({params}) => {

    const {id} = await params

    console.log(id)

    
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility/${id}`);
  const facility = await res.json();
  console.log(facility)

  
    const {_id, description, image, ownerEmail, timeSlots, capacity, pricePerHour, location, facilityName } = facility;
    return (

      <div className="w-6/12 mx-auto my-8">
        <div className="flex  items-center gap-3 justify-end mt-5 mb-3">
        <EditModal facility={facility} />
       
      </div>
      <Image
        className="w-full h-100 object-cover"
        alt={facilityName}
        src={image}
        height={500}
        width={800}
      />

     <div className="flex justify-between gap-10">
       <div className="p-2">
        <div className="flex items-center gap-1">
          <LuMapPin /> <span>{location}</span>
        </div>
        <div className="flex justify-between ">
          <div>
            <div>
              <h2 className="text-xl font-bold">{facilityName}</h2>
            </div>
            <div className="flex gap-1 items-center">
              <FaRegCalendar /> {timeSlots}
            </div>
            <div className="flex gap-1 items-center">
              $ {pricePerHour}
            </div>
          
          </div>
        </div>

        <h1 className="mt-10 text-2xl font-bold">Overview</h1>

        <p className="max-w-6xl">{description}</p>
      </div>


    
     </div>


    </div>
    )
}

export default FacilityDetailsPage;