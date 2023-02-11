import { useEffect, useContext } from "react";
import Goods from "../components/Goods";
import { API_URL, API_KEY } from '../config';
import Loader from "../components/Loader";
import Card from "../components/Card";
import BasketList from "../components/BasketList";
import { ShopContext } from "../context";

function Main() {

  const {setGoods, loading, order, isBasketShow} = useContext(ShopContext);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY
      }
    })
      .then(response => response.json())
      .then(data => { 
        setGoods(data.featured)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="content">
      <div className="container">
        <Card quantity={order.length} />
        {isBasketShow && <BasketList />}
        {loading ? <Loader /> : <Goods />}
      </div>
    </div>
  )
}
export default Main