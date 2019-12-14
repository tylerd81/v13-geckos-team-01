import React, { useContext } from "react";
import NutritionTable from "../Components/NutritionTable/NutritionTable";
import NutritionTotals from "../Components/NutrientTotals/NutrientTotals";
import { convertApiDataToNutritionData } from "../Components/NutritionTable/convert";
import itemListContext from "../context/itemListContext";

const ItemList = props => {
  const { itemList, totalNutrients } = useContext(itemListContext);

  const nutritionData = convertApiDataToNutritionData(itemList);

  return (
    <div>
      <h1 className="text-center m-2">My Items</h1>
      <NutritionTotals totalNutrients={totalNutrients} />
      <NutritionTable nutritionData={nutritionData} />
    </div>
  );
};
export default ItemList;
