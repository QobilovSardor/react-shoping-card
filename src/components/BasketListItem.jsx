function BasketListItem(props) {
  const { id, name, price, quantity, removeFromBasket, incrementQunatity, decrementQuantity } = props
  return (
    <li className="collection-item">
      {name} x{quantity} = {price * quantity}<b>$</b>
      <span className="secondary-content">
        <button className="waves-effect waves-light btn btnq" onClick={() => incrementQunatity(id)}>
          <i className="material-icons left">exposure_plus_1</i>add
        </button>
        <button className="waves-effect waves-light btn btnq" onClick={() => decrementQuantity(id)}>
          <i className="material-icons left">exposure_minus_1</i>remove
        </button>
        <i className="material-icons basket-delete" onClick={() => removeFromBasket(id)}>delete</i>
      </span>
    </li>
  );
}

export default BasketListItem;