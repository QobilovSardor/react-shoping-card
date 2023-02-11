import { useContext } from "react";
import { ShopContext } from "../context";

function GoodsItem(props) {
  const { id, name, description, full_background, price } = props;
  const {addToBacket} = useContext(ShopContext)
  return (
    <div>
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img alt="hello" className="activator" src={full_background} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{name}</span>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <button 
            className="btn"
            onClick={() => addToBacket({id, name, price})}
          >Buy</button>
          <b className="right">{price}$</b>
        </div>
      </div>
    </div>
  );
}

export default GoodsItem;