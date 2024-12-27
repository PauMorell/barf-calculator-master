import React, { useState } from "react";

export default function QuantityLine({ categoria, quantitat, onQuantityAdd }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddClick = () => {
    const amount = parseFloat(inputValue);
    if (!isNaN(amount) && amount > 0) {
      onQuantityAdd(amount);
      setInputValue("");
    }
  };

  const formattedQuantity = quantitat.toFixed(0);


  return (
    <div className="grid grid-cols-4 gap-4 p-1">
      <div className="p-1 text-center">
        <label htmlFor={categoria}>{categoria}</label>
      </div>
      <div className="p-1 mr-2 flex text-center justify-end">
        {formattedQuantity} g
      </div>
      <div className="p-1 flex justify-end">
        <input
          id={categoria}
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          min="0"
          step="1"
          className="pl-1 w-20"
        ></input>
      </div>
      <div className="flex justify-start max-w-full">
        <span>
          <button className="px-2 text-2xl" onClick={handleAddClick}>
            +
          </button>
        </span>
      </div>
    </div>
  );
}
