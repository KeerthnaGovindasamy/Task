/* 
Since first 4 parts in component1 has same styling, created a component to reuse it and prevent code iteration.
*/

import React from "react";

const BasicDetail = ({ title, value }) => {
  return (
    <div className="border-b border-gray-300 mb-3 text-left">
      <p className="pb-1 font-bold">{title}</p>
      <p className="pb-2">{value}</p>
    </div>
  );
};

export default BasicDetail;
