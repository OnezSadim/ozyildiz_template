"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
};

const products: Product[] = [
  { id: 1, name: "Boerenkaas", category: "Zuivel", price: "€8,50" },
  { id: 2, name: "Verse Tulpen", category: "Groente", price: "€4,50" },
  { id: 3, name: "Ambachtelijk Brood", category: "Brood", price: "€3,75" },
  { id: 4, name: "Biologische Appels", category: "Groente", price: "€4,50" },
  { id: 5, name: "Goudse Kaas", category: "Zuivel", price: "€7,25" },
  { id: 6, name: "Volkoren Brood", category: "Brood", price: "€3,25" },
];

const categories = ["Alles", "Groente", "Brood", "Zuivel"];

export default function ProductShowcase() {
  const [activeFilter, setActiveFilter] = useState("Alles");

  const filteredProducts =
    activeFilter === "Alles"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <section id="producten" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            Onze Producten
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Vers en lokaal, direct uit de buurt
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                activeFilter === category
                  ? "bg-secondary text-white"
                  : "bg-background-light text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] w-full bg-gray-200"></div>

              {/* Product Info */}
              <div className="p-6">
                <p className="mb-1 text-xs font-medium uppercase tracking-wide text-secondary">
                  {product.category}
                </p>
                <h3 className="mb-2 text-lg font-bold text-primary">
                  {product.name}
                </h3>
                <p className="text-lg font-semibold text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
