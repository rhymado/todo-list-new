import React from "react";

export default function newFeature() {
<<<<<<< HEAD
  const callFunction = (a) => {
    return a + 1;
=======
  const callFuntion = (a, b) => {
    return { a, b };
>>>>>>> new-feature
  };
  return (
    <div>
      <h2>Welcome to the new Feature</h2>
<<<<<<< HEAD
      <h5>{JSON.stringify(callFunction(3))}</h5>
=======
      <h5>{JSON.stringify(callFuntion(1, 2))}</h5>
>>>>>>> new-feature
    </div>
  );
}
