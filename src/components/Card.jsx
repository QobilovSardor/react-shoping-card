import { useContext } from "react";
import { ShopContext } from "../context";

function Card() {
  const {order, handleBasketShow = Function.prototype} = useContext(ShopContext);  
  const quantity = order.length
  return (
    <div id="shoping-card" onClick={handleBasketShow}>
      <i  className="material-icons">shopping_cart</i>   
      {quantity ? <span className="card-quntity">{quantity}</span> : null}
    </div>
  );
}

export default Card;