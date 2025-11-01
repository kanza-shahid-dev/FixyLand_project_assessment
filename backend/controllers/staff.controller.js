import Staff from "../models/staff.model.js";

export const getStaffs = async (req, res) => {
  try {
    const staffs = await Staff.find({});
    res.status(200).json(staffs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
