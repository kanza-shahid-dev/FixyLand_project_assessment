export const Heading = ({ title, color }) => {
  const default_color = color ? color : "text-white";
  return (
    <h2
      className={`text-3xl text-gray-900 font-extrabold ${default_color} my-4`}
    >
      {title}
    </h2>
  );
};
