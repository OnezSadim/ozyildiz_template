import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    text: "Beste winkel in de buurt! Altijd verse producten en vriendelijk personeel.",
    author: "Marieke V.",
  },
  {
    id: 2,
    text: "Altijd vers. De groenten zijn van topkwaliteit en de prijzen zijn redelijk.",
    author: "Jan D.",
  },
  {
    id: 3,
    text: "Mijn favoriete plek voor lokale producten. Echt een aanrader!",
    author: "Sophie K.",
  },
];

export default function Reviews() {
  return (
    <section className="bg-background-light py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-primary md:text-3xl">
            Wat Onze Klanten Zeggen
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-lg bg-white p-6 shadow-sm"
              style={{
                borderLeft: "4px solid #1A4D2E",
              }}
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-secondary text-secondary"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="mb-4 text-gray-700">{review.text}</p>

              {/* Author */}
              <p className="text-sm font-medium text-gray-900">
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
