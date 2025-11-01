import axios from "axios";
import { useEffect, useState } from "react";
import { Tag } from "./Tag";
import { Heading } from "./Heading";

export const Staffs = () => {
  const [staffs, setStaffs] = useState([]);
  const [loading, setLoading] = useState(true);

  const BaseURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchStaffsData = async () => {
      try {
        const response = await axios.get(`${BaseURL}/api/staff`);
        setStaffs(response.data);
      } catch (error) {
        console.error("Error fetching staff data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStaffsData();
  }, [BaseURL]);

  return (
    <section className="flex flex-col items-center text-center bg-[#f6f6f6] my-8 px-40 py-10">
      <Tag text="Fixyland Staff" />
      <Heading title="Expert Staff Persons" color="text-black" />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mt-4">
          {staffs?.map((staff) => (
            <div
              key={staff._id || staff.id}
              className="bg-white shadow-md rounded-xl flex flex-col text-left"
            >
              <img
                src={`${BaseURL}${staff.image}`}
                alt={staff.name}
                className="w-full h-full rounded-t-xl object-cover mb-3"
              />
              <div className="px-5 py-3">
                <p className="font-medium">{staff.name}</p>

                <p className="flex items-center text-gray-500 text-sm">
                  <span className="inline-block w-5 h-0.5 bg-green-600 mr-2"></span>
                  {staff.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
