import BookingCard from "@/components/BookingCard";
import { DeleteAlert } from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import { auth } from "@/lib/auth";
import Image from "next/image";
import { FaRegCalendar } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { headers } from "next/headers";
const FacilityDetailsPage = async ({params}) => {

    const {id} = await params

  const {token} = await auth.api.getToken({
    headers: await headers()
  })

 console.log(token)

    
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility/${id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  const facility = await res.json();
  console.log(facility)

  
    const {_id, description, image, ownerEmail, timeSlots, capacity, pricePerHour, location, facilityName } = facility;
    return (

      <div className=" w-11/12 md:w-6/12 mx-auto my-8">
        <div className="flex  items-center gap-3 justify-end mt-5 mb-3">
        <EditModal facility={facility} />
        <DeleteAlert facility={facility}/>
       
      </div>
      <Image
        className="w-full h-100 object-cover"
        alt={facilityName}
        src={image || null}
        height={500}
        width={800}
      />
    {/* <img src={image} alt="sample"  height={500} width={400}/> */}
  
       
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


     <BookingCard facility={facility}/>
     </div>


    </div>
    )
}

export default FacilityDetailsPage;