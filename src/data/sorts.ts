export interface Sort {
  id: string;
  label: string;
}

// NOTE: Hardcoded sort parameters from Spoonacular documentation as of April 2025
// No API endpoint is available for this list — consider validating periodically
export const sorts: Sort[] = [
  { id: "", label: "Relevance" },
  { id: "popularity", label: "Popularity" },
  { id: "healthiness", label: "Healthiness" },
  { id: "price", label: "Price" },
  { id: "time", label: "Time" },
  { id: "energy", label: "Energy" },
  { id: "calories", label: "Calories" },
  { id: "fiber", label: "Fiber" },
];
