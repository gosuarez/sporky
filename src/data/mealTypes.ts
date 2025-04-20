export interface MealType {
  id: string;
  label: string;
  image: string;
}

// NOTE: Hardcoded meal types from Spoonacular documentation as of April 2025
// No API endpoint is available for this list — consider validating periodically

export const allMealTypes: MealType[] = [
  {
    id: "main course",
    label: "Main Course",
    image: "/assets/meal-types/main-course.jpg",
  },
  {
    id: "side dish",
    label: "Side Dish",
    image: "/assets/meal-types/side-dish.jpg",
  },
  {
    id: "dessert",
    label: "Dessert",
    image: "/assets/meal-types/dessert.jpg",
  },
  {
    id: "appetizer",
    label: "Appetizer",
    image: "/assets/meal-types/appetizer.jpg",
  },
  {
    id: "salad",
    label: "Salad",
    image: "/assets/meal-types/salad.jpg",
  },
  {
    id: "bread",
    label: "Bread",
    image: "/assets/meal-types/bread.jpg",
  },
  {
    id: "breakfast",
    label: "Breakfast",
    image: "/assets/meal-types/breakfast.jpg",
  },
  {
    id: "soup",
    label: "Soup",
    image: "/assets/meal-types/soup.jpg",
  },
  {
    id: "beverage",
    label: "Beverage",
    image: "/assets/meal-types/beverage.jpg",
  },
  {
    id: "sauce",
    label: "Sauce",
    image: "/assets/meal-types/sauce.jpg",
  },
  {
    id: "marinade",
    label: "Marinade",
    image: "/assets/meal-types/marinade.jpg",
  },
  {
    id: "fingerfood",
    label: "Fingerfood",
    image: "/assets/meal-types/fingerfood.jpg",
  },
  {
    id: "snack",
    label: "Snack",
    image: "/assets/meal-types/snack.jpg",
  },
  {
    id: "drink",
    label: "Drink",
    image: "/assets/meal-types/drink.jpg",
  },
];
