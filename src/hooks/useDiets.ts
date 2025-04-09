export interface Diet {
  id: string;
  label: string;
}

// NOTE: Hardcoded diets from Spoonacular documentation as of April 2025
// No API endpoint is available for this list — consider validating periodically

const useDiets = () => {
  const diets: Diet[] = [
    { id: "gluten free", label: "Gluten Free" },
    { id: "ketogenic", label: "Ketogenic" },
    { id: "vegetarian", label: "Vegetarian" },
    { id: "lacto-vegetarian", label: "Lacto Vegetarian" },
    { id: "ovo-vegetarian", label: "Ovo Vegetarian" },
    { id: "vegan", label: "Vegan" },
    { id: "pescetarian", label: "Pescetarian" },
    { id: "paleo", label: "Paleo" },
    { id: "primal", label: "Primal" },
    { id: "low fodmap", label: "Low FODMAP" },
    { id: "whole30", label: "Whole30" },
  ];

  return diets.sort((a, b) => a.label.localeCompare(b.label));
};

export default useDiets;
