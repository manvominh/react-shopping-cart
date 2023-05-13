import React from "react";
import { PRODUCTS } from "../products";
import {Product}  from "./Product";

export const Shop = () => {
  return (
    <div className="container">
      <div className="shopTitle">
        <h1>Man Vo Shopping Cart</h1>
      </div>

      <div className="row">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
