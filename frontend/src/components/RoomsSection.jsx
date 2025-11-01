import { Bed, Bath, Users, ArrowUpRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Tag } from "./Tag";
import { Heading } from "./Heading";
import { useEffect, useState } from "react";
import axios from "axios";

export const RoomsSection = () => {
  const [rooms, setRooms] = useState([]);
  const BaseURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchRoomsData = async () => {
      try {
        const response = await axios.get(`${BaseURL}/api/hotels`);
        setRooms(response.data);
      } catch (error) {
        console.error("Error fetching staff data:", error);
      }
    };
    fetchRoomsData();
  }, [BaseURL]);

  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <Tag text="Our Best Rooms" />
          <Heading title="Luxury Rooms and Resort" />
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {rooms.map((room) => (
            <div
              key={room._id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={`${BaseURL}${room.image}`}
                  alt={room.name}
                  className="h-56 w-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs px-2 py-0.5 rounded-sm">
                  ${room.price} / Night
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{room.name}</h3>
                <div className="flex items-center gap-5 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <Users size={16} /> {room.guests} Guests
                  </span>
                  <span className="flex items-center gap-1">
                    <Bed size={16} /> {room.beds} Beds
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath size={16} /> {room.baths} Bath
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-6">{room.description}</p>

                <Button className="bg-[#0ca678] hover:bg-[#099268] text-white">
                  Read More <ArrowUpRight size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
