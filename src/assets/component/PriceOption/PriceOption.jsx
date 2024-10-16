import React from "react";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-300 rounded-md p-6  text-white">
      <h2 className="text-center">
        <span className="text-5xl">{price}</span>
        <span className="text-1xl">/mon</span>
      </h2>
      <h4 className="text-2xl">{name}</h4>
      <p>{features}</p>
      <button className="bg-stone-50 text-black mt-5 p-2  px-4 rounded-md hover:bg-sky-800">
        show more
      </button>
    </div>
  );
};

export default PriceOption;
