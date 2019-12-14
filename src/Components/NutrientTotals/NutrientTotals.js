import React from "react";
import "./nutrient-totals.css";

const NutrientTotals = ({ totalNutrients }) => {
  const { calories, fat, protein, sodium, carbohydrates } = totalNutrients;

  return (
    <ul className="nutrient-totals">
      <li>
        Calories: <span className="total">{calories.toFixed(2)}</span>
      </li>
      <li>
        Fat: <span className="total">{fat.toFixed(2)}</span>
      </li>
      <li>
        Protein: <span className="total">{protein.toFixed(2)}</span>
      </li>
      <li>
        Sodium: <span className="total">{sodium.toFixed(2)}</span>
      </li>
      <li>
        Carbohydrates: <span className="total">{carbohydrates.toFixed(2)}</span>
      </li>
    </ul>
  );
};

export default NutrientTotals;
