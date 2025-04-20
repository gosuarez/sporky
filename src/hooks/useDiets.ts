import { allDiets } from "../data/diets";

const useDiets = () => {
  return [...allDiets].sort((a, b) => a.label.localeCompare(b.label));
};

export default useDiets;
