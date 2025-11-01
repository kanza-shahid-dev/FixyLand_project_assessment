import { useFormik } from "formik";
import * as Yup from "yup";
import { ArrowUpRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { ErrorMessage } from "./ErrorMessage";
import axios from "axios";

export const AppointmentForm = () => {
  const BaseURL = import.meta.env.VITE_API_URL;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      type: "single",
      room: "deluxe",
      checkIn: "",
      checkOut: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      phone: Yup.string().required("Required"),
      checkIn: Yup.date().required("Select check-in date"),
      checkOut: Yup.date().required("Select check-out date"),
      message: Yup.string().required("Please enter a message"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(
          `${BaseURL}/api/appointments`,
          values
        );

        if (!response.status === 201)
          throw new Error("Failed to save appointment");

        alert("Appointment booked successfully!");
        resetForm();
      } catch (error) {
        console.error(error);
        alert("Something went wrong while booking the appointment");
      }
    },
  });

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm flex-1">
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <Label>First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="Ex. first name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <ErrorMessage message={formik.errors.firstName} />
            )}
          </div>

          {/* Last Name */}
          <div>
            <Label>Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Ex. last name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <ErrorMessage message={formik.errors.lastName} />
            )}
          </div>

          {/* Email */}
          <div>
            <Label>Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Ex. info@domain.com"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email && (
              <ErrorMessage message={formik.errors.email} />
            )}
          </div>

          {/* Phone */}
          <div>
            <Label>Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="Ex. 0987 654 3210"
              value={formik.values.phone}
              type="number"
              onChange={formik.handleChange}
            />
            {formik.touched.phone && formik.errors.phone && (
              <ErrorMessage message={formik.errors.phone} />
            )}
          </div>

          {/* Select Type */}
          <div>
            <Label>Select Type</Label>
            <Select
              onValueChange={(value) => formik.setFieldValue("type", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder={formik.values.type} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">Single</SelectItem>
                <SelectItem value="double">Double</SelectItem>
                <SelectItem value="suite">Suite</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Select Room */}
          <div>
            <Label>Select Room</Label>
            <Select
              onValueChange={(value) => formik.setFieldValue("room", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder={formik.values.room} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="deluxe">Deluxe</SelectItem>
                <SelectItem value="standard">Standard</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Check In */}
          <div>
            <Label>Check In</Label>
            <Input
              type="date"
              id="checkIn"
              name="checkIn"
              value={formik.values.checkIn}
              onChange={formik.handleChange}
            />
            {formik.touched.checkIn && formik.errors.checkIn && (
              <ErrorMessage message={formik.errors.checkIn} />
            )}
          </div>

          {/* Check Out */}
          <div>
            <Label>Check Out</Label>
            <Input
              type="date"
              id="checkOut"
              name="checkOut"
              value={formik.values.checkOut}
              onChange={formik.handleChange}
            />
            {formik.touched.checkOut && formik.errors.checkOut && (
              <ErrorMessage message={formik.errors.checkOut} />
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <Label>Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Ex. type message"
            className="h-40"
            value={formik.values.message}
            onChange={formik.handleChange}
          />
          {formik.touched.message && formik.errors.message && (
            <ErrorMessage message={formik.errors.message} />
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-start">
          <Button type="submit" className="bg-[#0ca678] hover:bg-[#099268]">
            Book Appointment <ArrowUpRight size={16} />
          </Button>
        </div>
      </form>
    </div>
  );
};
