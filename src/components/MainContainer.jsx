import React, { useEffect } from "react";
import Fruits from "./products/Fruits";
import Roots from "./products/Roots";
import { useStateValue } from "../context/StateProvider";
import Vegetables from "./products/Vegetables";
import Checkout from "./Checkout/Checkout";

const MainContainer = () => {
  const [{ cartShow }, dispatch] = useStateValue();

  useEffect(() => {}, [cartShow]);

  return (
    <div className="mx-auto mt-5 max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-4 w-full">
      <Fruits />
      {/* <Roots /> */}
      {/* <Vegetables /> */}
      {cartShow && <Checkout />}
    </div>
  );
};

export default MainContainer;
