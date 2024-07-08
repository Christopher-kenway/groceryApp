import React from "react";
import Fruits from "./Fruitsection/Fruits";
import Roots from "./Rootsection/Roots";
import Vegetables from "./Vegetables/Vegetables";

const MainContainer = () => {
  return (
    <div className="mx-auto mt-5 max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-4 w-full">
      <Fruits />
      {/* <Roots /> */}
      {/* <Vegetables /> */}
    </div>
  );
};

export default MainContainer;
