import { Tag } from "./Tag";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import { Heading } from "./Heading";

export const ClientsSection = () => {
  const clients = [client1, client2, client3, client4, client5, client6];
  return (
    <section className="bg-[#e9f0ec] py-16 text-center">
      <div className="flex flex-col items-center justify-center">
        <Tag text="Our Clients" />
        <Heading
          title="We Have More Than 150+ Global Clients"
          color="text-black"
        />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-20 px-6 mt-6">
        {clients.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Client ${index + 1}`}
            className="h-20 opacity-60 hover:opacity-100 transition-opacity duration-300"
          />
        ))}
      </div>
    </section>
  );
};
