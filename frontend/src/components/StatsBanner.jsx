import React from "react";

export const StatsBanner = () => {
  const stats = [
    { number: "305", label: "Luxury Rooms" },
    { number: "650", label: "Regular Guests" },
    { number: "80", label: "Team Member" },
    { number: "75", label: "Beaches" },
  ];

  return (
    <section className="bg-primary text-white py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/40 divide-dashed">
        {stats.map((item, index) => (
          <div key={index} className="p-1">
            <h2 className="text-4xl font-semibold mb-1 text-outline">
              {item.number} +
            </h2>
            <p className="text-white/90 text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
