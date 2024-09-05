import React from "react";

const Card = ({ label, value }) => {
  return (
    <div className="flex gap-5 py-1 px-3 bg-gray-300 rounded-md items-center">
      <p>{label}</p>
      <p className="font-bold text-2xl">{value}</p>
    </div>
  );
};

export default Card;
