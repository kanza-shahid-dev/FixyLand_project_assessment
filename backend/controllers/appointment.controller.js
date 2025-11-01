import Appointment from "../models/appointment.model.js";

export const createAppointment = async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res
      .status(201)
      .json({
        message: "Appointment saved successfully",
        data: newAppointment,
      });
  } catch (error) {
    console.error("Error saving appointment:", error);
    res.status(500).json({ message: "Error saving appointment", error });
  }
};
