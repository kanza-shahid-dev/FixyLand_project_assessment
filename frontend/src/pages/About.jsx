import { StatsBanner } from "../components/StatsBanner";
import { Staffs } from "../components/Staffs";
import { ClientsSection } from "../components/ClientsSection";
import { VideoSection } from "../components/VideoSection";
import WhyChooseUs from "../components/WhyChooseUs";
import { OutdoorActivities } from "../components/OutdoorActivities";

export const About = () => {
  return (
    <>
      <OutdoorActivities />
      <StatsBanner />
      <WhyChooseUs />
      <VideoSection />
      <Staffs />
      <ClientsSection />
    </>
  );
};
