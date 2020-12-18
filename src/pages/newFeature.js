import React from "react";

export default function newFeature() {
  const callFunction = (a) => {
    return a + 1;
  };
  return (
    <div>
      <h2>Welcome to the new Feature</h2>
      <h5>{JSON.stringify(callFunction(3))}</h5>
    </div>
  );
}
