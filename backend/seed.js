import mongoose from "mongoose";
import dotenv from "dotenv";
import Staff from "./models/staff.model.js";
import Hotel from "./models/hotel.model.js";

dotenv.config();

const seedStaff = [
  {
    name: "Alice Parker",
    image: "/images/alice.png",
    type: "Manager",
  },
  { name: "Michael Dean", image: "/images/michael.png", type: "Chef Master" },
  { name: "Sarah Scott", image: "/images/sarah.png", type: "Assistant Chef" },
  { name: "David Matt", image: "/images/david.png", type: "Receptionist" },
];

const seedHotels = [
  {
    name: "Deluxe Rooms",
    image: "/images/delux.png",
    description: "Luxury seaside resort with ocean-facing rooms.",
    guests: 4,
    beds: 2,
    bath: 2,
    price: 800,
  },
  {
    name: "Junior Rooms",
    image: "/images/junior.png",
    description:
      "Peaceful mountain retreat with scenic views. Good Views booking",
    guests: 6,
    beds: 3,
    bath: 3,
    price: 400,
  },
  {
    name: "Family Rooms",
    image: "/images/family.png",
    description: "Modern hotel located in the heart of downtown.",
    guests: 2,
    beds: 1,
    bath: 1,
    price: 600,
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Staff.deleteMany();
    await Hotel.deleteMany();

    await Staff.insertMany(seedStaff);
    await Hotel.insertMany(seedHotels);

    console.log("Database seeded successfully");

    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    mongoose.connection.close();
  }
};

seedDatabase();
