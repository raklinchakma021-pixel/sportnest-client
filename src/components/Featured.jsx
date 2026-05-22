import { Button } from "@heroui/react";
import Link from "next/link";
import FacilityCard from "./FacilityCard";

const Featured = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`)
    const facilities = await res.json()
    console.log(facilities)
    return (
        <div className="mt-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
             <div>
               <h1 className="text-3xl font-bold">Featured Facilities</h1>
            <p className="text-muted"> Sports experiences for the sports seekers</p>
         </div>

     <Link href={'/facilities'}>    <Button variant="outline" className={'rounded-none border-green-500 border-2 text-green-500'}>All Facilities</Button></Link>
        </div>


        <div className="grid grid-cols-3 md:grid-cols-4 gap-5 mt-10">
            {facilities.map(facility => <FacilityCard key={facility._id} facility={facility}/>)}
        </div>
            
        </div>
    );
};

export default Featured;