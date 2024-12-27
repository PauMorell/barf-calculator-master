import React from "react";
import QuantityLine from "./QuantityLine";

export default function QuantityForm({ quantities, onQuantityChange }) {
  return (
    <div className="mt-12 ml-8">
      <div className="flex items-center">
        <img src="/muslo-de-pollo.png" width="30px"></img>

        <QuantityLine
          categoria="HC"
          quantitat={quantities.HC}
          onQuantityAdd={(amount) => onQuantityChange("HC", amount)}
        />
      </div>
      <div className="flex items-center">
        <img src="/carne.png" width="28px"></img>
        <QuantityLine
          categoria="CARN"
          quantitat={quantities.C}
          onQuantityAdd={(amount) => onQuantityChange("C", amount)}
        />
      </div>
      <div className="flex items-center">
        <img src="/kidney_2864552.png" width="30px"></img>
        <QuantityLine
          categoria="VÍSC."
          quantitat={quantities.VISC}
          onQuantityAdd={(amount) => onQuantityChange("VISC", amount)}
        />
      </div>
      <div className="flex items-center">
        <img src="/carrot.png" width="30px"></img>
        <QuantityLine
          categoria="VERD."
          quantitat={quantities.VERD}
          onQuantityAdd={(amount) => onQuantityChange("VERD", amount)}
        />
      </div>
    </div>
  );
}
