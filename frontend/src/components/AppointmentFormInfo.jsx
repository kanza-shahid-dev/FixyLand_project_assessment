import React from "react";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

export const AppointmentFormInfo = () => {
  return (
    <div className="bg-[#0ca678] text-white rounded-2xl p-8 w-full md:w-[350px] flex flex-col items-center shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
        alt="Hotel Room"
        className="rounded-xl mb-6"
      />
      <h3 className="text-xl font-semibold mb-2">(+1) 987 654 3210</h3>
      <p className="text-sm mb-1">Mon-Fri: 7:00 am - 9:00 pm</p>
      <p className="text-sm mb-6">24/7 Service Available</p>
      <Button
        variant="secondary"
        className="bg-[#e5c466] text-black hover:bg-[#e0b90d]"
      >
        Call Us Now <ArrowUpRight size={16} />
      </Button>
    </div>
  );
};
