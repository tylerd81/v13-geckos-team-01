import React, { useContext } from "react";
import NutritionTable from "../Components/NutritionTable/NutritionTable";
import { convertApiDataToNutritionData } from "../Components/NutritionTable/convert";
import itemListContext from "../context/itemListContext";

const ItemList = props => {
  const { itemList } = useContext(itemListContext);
  const nutritionData = convertApiDataToNutritionData(itemList);

  return (
    <div>
      <h1 className="text-center m-2">My Items</h1>
      <NutritionTable nutritionData={nutritionData} />
    </div>
  );
};
export default ItemList;
