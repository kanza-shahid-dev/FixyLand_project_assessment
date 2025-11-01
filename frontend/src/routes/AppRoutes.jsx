import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { Booking } from "../pages/Booking";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  );
};
