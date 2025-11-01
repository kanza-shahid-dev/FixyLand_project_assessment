import { Tag } from "../components/Tag";
import { AppointmentForm } from "../components/AppointmentForm";
import { AppointmentFormInfo } from "../components/AppointmentFormInfo";
import { RoomsSection } from "../components/RoomsSection";
import { Heading } from "../components/Heading";

export const Booking = () => {
  return (
    <section className="bg-primary-background py-16">
      <div className="container mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <Tag text="Stay With Us" />
          <Heading title="Make An Appointment" color="text-black" />
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row items-start gap-10 justify-center mb-12">
          <AppointmentForm />
          <AppointmentFormInfo />
        </div>
      </div>
      <RoomsSection />
    </section>
  );
};
