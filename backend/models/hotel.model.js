import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  guests: Number,
  beds: Number,
  bath: Number,
  price: Number,
});

const Hotel = mongoose.model("Hotel", hotelSchema);

export default Hotel;
