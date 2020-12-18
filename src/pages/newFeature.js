import React from "react";

export default function newFeature() {
  const callFuntion = (a, b) => {
    return { a, b };
  };
  return (
    <div>
      <h2>Welcome to the new Feature</h2>
      <h5>{JSON.stringify(callFuntion(1, 2))}</h5>
    </div>
  );
}
