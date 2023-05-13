import React, { useContext, useState } from "react";
import { ShopContext } from "../context/shop_context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  var imgUrl = {
    backgroundImage: 'url(' + productImage + ')',    
  };
  //console.log(cartItems);
  return (
    <tr className="text-center">
      <td class="product-remove"><a href="#"><span class="ion-ios-close" onClick={(e) => removeFromCart(id)}></span></a></td> 

      <td className="image-prod"><div className="img" style={imgUrl} ></div></td>

      <td className="product-name">
        <h3>{productName}</h3>
        <p>Far far away, behind the word mountains, far from the countries</p>
      </td>

      <td className="price">${price}</td>

      <td className="quantity">
        <div className="input-group mb-3">
          <input type="text" name="quantity" className="quantity form-control input-number" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}	min="1" max="100" />
        </div>
      </td>

      {/* <td id={id} class="total">${totalPricePerProduct}</td> */}
    </tr>


  );
};
