import BasketListItem from "./BasketListItem";

function BasketList(props) {
  const { incrementQunatity, order, handleBasketShow, removeFromBasket, decrementQuantity } = props
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity
  }, 0)

  return (
    <div className="bsk">
      <ul className="collection basket-list">
        <li className="collection-item active">
          Basket
          <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
        </li>
        {order.length ? order.map(item => (
          <BasketListItem 
            key={item.id} 
            {...item} 
            removeFromBasket={removeFromBasket} 
            incrementQunatity={incrementQunatity}
            decrementQuantity={decrementQuantity}
          />
        )) : <li className="collection-item">Basket is empty</li>}
        <li className="collection-item active">
          Total Price: {totalPrice}<b>$</b>
        </li>
      </ul>
    </div>
  );
}

export default BasketList;