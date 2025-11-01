import React from "react";
import { Tag } from "./Tag";
import { Heading } from "./Heading";

export default function WhyChooseUs() {
  const skills = [
    { name: "Services", value: 95 },
    { name: "Chef Master", value: 85 },
    { name: "Design", value: 92 },
    { name: "It Solution", value: 98 },
  ];

  return (
    <section className="py-20 bg-[#f6f6f6]">
      <div className="mx-auto px-6 md:px-24 flex flex-col lg:flex-row items-center gap-20 md:gap-22 lg:gap-32">
        {/* Left Section */}
        <div className="flex-1 text-left justify-start items-start px-10 md:px-20">
          <Tag text="Our Skills" align="left" />
          <Heading title="Why Choose for us?" color="text-black" />

          <p className="text-gray-400 mb-10 max-w-md">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even.
          </p>

          {/* Skill Bars */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm font-semibold text-gray-800 mb-2">
                  <span>{skill.name}</span>
                  <span className="text-green-600">{skill.value}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-600 rounded-full"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 relative px-20">
          {/* Main large image */}
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
            alt="Beach resort"
            className="rounded-2xl shadow-lg h-130 w-full object-cover"
          />

          {/* Small overlapping image */}
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80"
            alt="Restaurant"
            className="absolute bottom-30 left-0 h-45 w-48 md:w-52 rounded-xl shadow-xl border-4 border-white transform translate-x-6 translate-y-6"
          />
        </div>
      </div>
    </section>
  );
}
