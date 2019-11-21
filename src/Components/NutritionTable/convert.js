export function convertApiDataToNutritionData(data) {
  // this function expects the Parsed json object, not a string.

  // special characters have to be escaped for use in the regex
  const fields = [
    "Protein",
    "Total lipid (fat)",
    "Energy",
    "Cholesterol",
    "Carbohydrate, by difference",
    "Sugars, total including NLEA",
    "Fiber, total dietary",
    "Calcium, Ca",
    "Iron, Fe",
    "Sodium, Na"
  ].map(s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));

  const nutritionData = data.map(item => {
    const nutrients = {};
    const name = item.description;
    const regex = new RegExp(fields.join("|"));
    const { foodNutrients } = item;

    foodNutrients.forEach(foodNut => {
      // check if this is one of the fields to save
      if (foodNut.nutrient.name.match(regex)) {
        let { name, unitName } = foodNut.nutrient;
        const { amount } = foodNut;

        if (name === "Energy") {
          name = "Calories";
        } else if (name.includes("Total")) {
          name = "fat";
        } else if (name.includes("Carbohydrate")) {
          name = "carbohydrates";
        }
        nutrients[name.toLowerCase()] = { value: amount, unitName };
      }
    });
    return {
      name,
      nutrients
    };
  });

  return nutritionData;
}
