import {
  ADD_ITEM,
  REMOVE_ITEM,
  SET_LAST_ITEM_ADDED,
  SHOW_TOAST,
  HIDE_TOAST
} from "./actions";

// getNutrientValues() gets some of the nutrients from the object returned from the API
const getNutrientValues = item => {
  // very slowly add up the nutrients...
  const totals = {};

  item.foodNutrients.forEach(nutrient => {
    const name = nutrient.nutrient.name;
    switch (name) {
      case "Protein":
        totals.protein =
          typeof nutrient.amount === "number" ? nutrient.amount : 0;
        break;

      case "Total lipid (fat)":
        totals.fat = typeof nutrient.amount === "number" ? nutrient.amount : 0;
        break;

      case "Carbohydrate, by difference":
        totals.carbohydrates =
          typeof nutrient.amount === "number" ? nutrient.amount : 0;
        break;

      case "Energy":
        totals.calories =
          typeof nutrient.amount === "number" ? nutrient.amount : 0;
        break;

      case "Sodium, Na":
        totals.sodium =
          typeof nutrient.amount === "number" ? nutrient.amount : 0;
        break;

      default:
        break;
    }
  });
  return totals;
};

export default (state, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const { itemList, totalNutrients } = state;
      const totals = { ...totalNutrients };
      const item = action.payload;

      // add in the nutrient values
      const nutrients = getNutrientValues(item);
      totals.protein += nutrients.protein;
      totals.fat += nutrients.fat;
      totals.carbohydrates += nutrients.carbohydrates;
      totals.calories += nutrients.calories;
      totals.sodium += nutrients.sodium;

      return {
        ...state,
        totalNutrients: totals,
        itemList: [...itemList, action.payload]
      };
    }

    case SET_LAST_ITEM_ADDED:
      return {
        ...state,
        lastItemAdded: action.payload
      };

    case SHOW_TOAST:
      return {
        ...state,
        isToastShown: true
      };

    case HIDE_TOAST:
      return {
        ...state,
        isToastShown: false
      };

    case REMOVE_ITEM: {
      const itemList = [...state.itemList];
      const indexToRemove = action.payload;

      // subtract out the nutrient values
      const nutrients = getNutrientValues(itemList[indexToRemove]);
      const totals = { ...state.totalNutrients };
      totals.protein -= nutrients.protein;
      totals.fat -= nutrients.fat;
      totals.carbohydrates -= nutrients.carbohydrates;
      totals.sodium -= nutrients.sodium;
      totals.calories -= nutrients.calories;

      // remove the item
      const removedItem = itemList.splice(indexToRemove, 1);

      return {
        ...state,
        totalNutrients: totals,
        itemList
      };
    }
    default:
      return state;
  }
};
