function Card({ quantity = 0, handleBasketShow = Function.prototype }) {
  return (
    <div id="shoping-card" onClick={handleBasketShow}>
      <i  className="material-icons">shopping_cart</i>   
      {quantity ? <span className="card-quntity">{quantity}</span> : null}
    </div>
  );
}

export default Card;