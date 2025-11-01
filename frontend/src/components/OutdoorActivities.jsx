import { ArrowUpRight } from "lucide-react";
import { Tag } from "./Tag";
import { Button } from "./ui/button";
import { Heading } from "./Heading";

export const OutdoorActivities = () => {
  const checklist = [
    "It is a long fact that a reader will be distracted by the readable.",
    "Lorem Ipsum is simply dummy of the printing and industry.",
    "There are many variations of Lorem Ipsum majority.",
  ];
  return (
    <section className="bg-primary-background py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-20 px-6 md:px-10">
        {/* ===== Left Content ===== */}
        <div className="flex-1 flex flex-col items-start text-left px-4">
          <Tag text="Luxury Hotel" align="Left" />
          <Heading
            title="We Provide Outdoor Activities To All Visitors"
            color="text-black"
          />

          {/* Description */}
          <p className="text-gray-400 mb-8 max-w-lg">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even.
          </p>

          {/* Feature icons */}
          <div className="flex flex-wrap gap-8 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🏊‍♂️</span>
              <p className="font-bold text-gray-800">
                The Best <br /> Swimming Pool
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🚴‍♀️</span>
              <p className="font-bold text-gray-800">
                The Best <br /> Stationary Bike
              </p>
            </div>
          </div>

          {/* Checklist */}
          <ul className="space-y-3 text-gray-500 mb-8">
            {checklist.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-green-500">✔️</span> {item}
              </li>
            ))}
          </ul>

          {/* Button */}
          <Button variant="default">
            Discover More <ArrowUpRight size={16} />
          </Button>
        </div>

        {/* ===== Right Side Images ===== */}
        <div className="flex-1 relative">
          <div className="relative w-full flex justify-center bg-[#ecf5f1] py-16">
            <div className="relative w-[300px] h-[380px] rounded-2xl overflow-hidden shadow-xl z-10">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Fireplace Room"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-[-60px] left-10 w-[200px] h-[280px] rounded-2xl overflow-hidden shadow-xl z-20">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
                alt="Indoor Pool"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-93 left-50 bg-black text-white p-4 py-6 rounded-xl w-[180px] z-20 hidden sm:flex flex-col shadow-2xl items-center">
              🍽️
              <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
                Restaurants
              </h3>
              <p className="text-xs leading-snug text-gray-300">
                Donec in quis the asd pellentesque velit. Donec id velit arcu
                posuere blane.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
