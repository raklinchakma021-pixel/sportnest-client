import FacilityCard from "@/components/FacilityCard";

const FacilitiesPage = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch facilities");
    }

    const facilities = await res.json();

    console.log(facilities);

    return (
      <div className="w-10/12 mx-auto">
          <h1 className="font-bold text-3xl py-6">All Featured Facilities</h1>

          <div className="grid grid-cols-3 gap-6 mb-6">
            {
                facilities.map(facility => <FacilityCard key={facility._id} facility={facility}/>)
            }
          </div>
      </div>
    );
  } catch (error) {
    console.error(error);

    return <div>Failed to load facilities</div>;
  }
};

export default FacilitiesPage;