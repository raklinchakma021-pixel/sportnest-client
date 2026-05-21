import FacilityCard from "@/components/FacilityCard";

const FacilitiesPage = async ({ searchParams }) => {
  try {
    // Get query params
   const params = await searchParams;

const search = params?.search || "";
const sportType = params?.sportType || "";

    // Build query string
    const query = new URLSearchParams();

    if (search) {
      query.append("search", search);
    }

    if (sportType) {
      query.append("sportType", sportType);
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/facility?${query.toString()}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch facilities");
    }

    const facilities = await res.json();

    return (
      <div className="w-10/12 mx-auto">
        <h1 className="font-bold text-3xl py-6">
          All Featured Facilities
        </h1>

        {/* Search + Filter Form */}
        <form className="flex gap-4 mb-8">
          {/* Search */}
          <input
            type="text"
            name="search"
            placeholder="Search by facility name"
            defaultValue={search}
            className="border px-4 py-2 rounded-md w-full"
          />

          {/* Filter */}
          <select
            name="sportType"
            defaultValue={sportType}
            className="border px-4 py-2 rounded-md"
          >
            <option value="">All Sports</option>
            <option value="Football">Football</option>
            <option value="Cricket">Cricket</option>
            <option value="Badminton">Badminton</option>
            <option value="Basketball">Basketball</option>
          </select>

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-md"
          >
            Search
          </button>
        </form>

        {/* Facilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
  {facilities.length > 0 ? (
    facilities.map((facility) => (
      <FacilityCard
        key={facility._id}
        facility={facility}
      />
    ))
  ) : (
    <div className="col-span-full text-center py-20">
      <h2 className="text-2xl font-bold">
        No Facilities Found
      </h2>

      <p className="text-gray-500 mt-2">
        Try searching with another keyword.
      </p>
    </div>
  )}
</div>
      </div>
    );
  } catch (error) {
    console.error(error);

    return <div>Failed to load facilities</div>;
  }
};

export default FacilitiesPage;