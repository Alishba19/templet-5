import React from "react";
import Shop from "../components/shop";
import Product from "../components/product";
import Show from "../components/show";
import BrandLogo from "../components/BrandLogo";
import Product2 from "../components/product2";
import Mobilenav from "../components/Mobilenav";

export default function ShopPage() {
  return (
    <div>
      <Mobilenav />
      <Shop />
      <Product />
      <Show />
      <BrandLogo />
      <Product2 />
    </div>
  );
}