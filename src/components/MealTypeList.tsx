import useMealTypes from "../hooks/useMealTypes";

const MealTypeList = () => {
  const mealTypes = useMealTypes();

  return (
    <ul>
      {mealTypes.map((type) => (
        <li key={type.id}>{type.label}</li>
      ))}
    </ul>
  );
};

export default MealTypeList;
