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
    <div className="">
      <Fruits />
      <Roots />
      <Vegetables />
      {cartShow && <Checkout />}
    </div>
  );
};

export default MainContainer;
