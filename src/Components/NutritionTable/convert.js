/*
  convertApiDataToNutritionData() converts the JSON data returned from the
  API into a simpler object. It uses the names of the nutrients as keys making
  it easier to access the nutrient value for each item.

  The function returns an array of objects in this format:
  {
    name: "cheese",       
    portion: { size: 10, unit: "g" },
    nutrients: {
      protein: { value: 12.333, unitName: "g", id: 12345 },
      calories: { value: 300, unitName: "kcal" },
      fat: { value: 15, unitName: "g" }
    }
  },
  
  The fields array contains the fields that will be grabbed from the JSON 
  data. Some of the fields will have their names shortened by this function.
*/
export function convertApiDataToNutritionData(data) {
  // this function expects the Parsed json object, not a string.

  //placeholder for when portion size is figured out
  const portion = { size: 0, unit: "NYI" };

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
        let { name, unitName, id } = foodNut.nutrient;
        const { amount } = foodNut;

        if (name === "Energy") {
          name = "Calories";
        } else if (name.includes("Total")) {
          name = "fat";
        } else if (name.includes("Carbohydrate")) {
          name = "carbohydrates";
        }
        nutrients[name.toLowerCase()] = { value: amount, unitName, id };
      }
    });
    return {
      name,
      portion,
      nutrients
    };
  });

  return nutritionData;
}
