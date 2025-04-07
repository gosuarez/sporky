// hooks/useMealTypes.ts
export interface MealType {
  id: string;
  label: string;
}

// NOTE: Hardcoded meal types from Spoonacular documentation as of April 2025
// No API endpoint is available for this list — consider validating periodically

const useMealTypes = () => {
  const mealTypes: MealType[] = [
    { id: "main course", label: "Main Course" },
    { id: "side dish", label: "Side Dish" },
    { id: "dessert", label: "Dessert" },
    { id: "appetizer", label: "Appetizer" },
    { id: "salad", label: "Salad" },
    { id: "bread", label: "Bread" },
    { id: "breakfast", label: "Breakfast" },
    { id: "soup", label: "Soup" },
    { id: "beverage", label: "Beverage" },
    { id: "sauce", label: "Sauce" },
    { id: "marinade", label: "Marinade" },
    { id: "fingerfood", label: "Fingerfood" },
    { id: "snack", label: "Snack" },
    { id: "drink", label: "Drink" },
  ];

  return mealTypes;
};

export default useMealTypes;
