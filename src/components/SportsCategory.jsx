import Image from "next/image";

export default function SportsCategories() {
  const sports = [
    {
      name: "Football",
      venues: "24 Venues Available",
      image:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Basketball",
      venues: "18 Venues Available",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Badminton",
      venues: "12 Venues Available",
      image:
        "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Popular Sports Categories
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Explore the most booked sports facilities and start playing today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {sports.map((sport, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition duration-300"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={sport.image}
                  alt={sport.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6 bg-white">
                <h3 className="text-2xl font-semibold text-slate-900">
                  {sport.name}
                </h3>

                <p className="text-slate-500 mt-2">{sport.venues}</p>

                <button className="mt-5 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition">
                  Explore Venues
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}