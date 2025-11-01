export const Hero = ({ title }) => {
  return (
    <section className="hero-container flex items-center justify-start relative px-10 md:px-50">
      <h1 className="text-4xl text-white font-bold z-10">{title}</h1>
    </section>
  );
};
