import Hotel from "../models/hotel.model.js";

export const getHotel = async (req, res) => {
  try {
    const hotels = await Hotel.find({});
    res.status(200).json(hotels);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
