import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import { ConnectDB } from "./config/db.js";
import staffRoute from "./routes/staff.route.js";
import hotelRoute from "./routes/hotel.route.js";
import appointmentRoute from "./routes/appointment.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/staff", staffRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/appointments", appointmentRoute);

app.listen(PORT, () => {
  ConnectDB();
  console.log("started", PORT);
});
