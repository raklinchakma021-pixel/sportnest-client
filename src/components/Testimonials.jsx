export default function Testimonials() {
  const reviews = [
    {
      name: "Rahim Ahmed",
      role: "Football Player",
      review:
        "SportNest made booking football grounds incredibly simple. The process is smooth and fast.",
    },
    {
      name: "Nusrat Jahan",
      role: "Basketball Enthusiast",
      review:
        "I love how easy it is to discover nearby courts and reserve slots instantly.",
    },
    {
      name: "Sabbir Hasan",
      role: "Badminton Player",
      review:
        "The platform feels modern, responsive, and very convenient for regular players.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            What Athletes Say
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Thousands of sports lovers trust SportNest for their bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300"
            >
              <p className="text-slate-600 leading-7">
                "{review.review}"
              </p>

              <div className="mt-6 border-t pt-5">
                <h4 className="text-xl font-semibold text-slate-900">
                  {review.name}
                </h4>

                <p className="text-slate-500 mt-1">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}