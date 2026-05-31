
import Banner from "@/components/Banner";

import SportsCategories from "@/components/SportsCategory";
import Testimonials from "@/components/Testimonials";






export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
      
        <Banner/>
      

     
     
     

     
        <Testimonials />
     

    
        <SportsCategories />
     
    </div>
  );
}