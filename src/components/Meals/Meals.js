import React from "react";
import AvailableMeals from "./AvaliableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  //write function to add 2 numbers
  const addNumbers = (a, b) => {
    return a + b;
  };

  console.log(addNumbers(2, 5));
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
};

export default Meals;
