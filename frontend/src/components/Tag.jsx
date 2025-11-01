import React from "react";

export const Tag = ({ text, align }) => {
  return (
    <p
      className={`uppercase text-primary bg-white px-2 py-0.5 text-xs font-medium w-fit my-3 mb-1 rounded-sm ${align}`}
    >
      {text}
    </p>
  );
};
