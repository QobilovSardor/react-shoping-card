import { useEffect, useState } from "react";
import Goods from "../components/Goods";
import { API_URL, API_KEY } from '../config';
import Loader from "../components/Loader";
import Card from "../components/Card";
import BasketList from "../components/BasketList";
import { toast } from "react-toastify";

function Main() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);

  function addToBacket(item) {
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)
    if(itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1
      }
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if(index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        } else {
          return orderItem
        }
      })
      setOrder(newOrder)
    }

    toast.success('Goods added to basket succesfuly');
  }

  function handleBasketShow() {
    setBasketShow(!isBasketShow);
  }

  function removeFromBasket(itemId) {
    const newOrder = order.filter(item => item.id !== itemId);
    setOrder(newOrder);
    toast.error('Goods deleted from basket succesfuly');
  }

  function incrementQunatity(itemId) {
    const newOrder = order.map(el => {
      if(el.id === itemId) {
        const newQuntity = el.quantity + 1
        return {
          ...el,
          quantity: newQuntity
        }
      } else {
        return el
      }
    })
    console.log(newOrder)
    setOrder(newOrder)
  }

  function decrementQuantity(itemId) {
    const newOrder = order.map(el => {
      if(el.id === itemId) {
        const newQuntity = el.quantity - 1
        return {
          ...el,
          quantity: newQuntity >= 0 ? newQuntity : 0
        }
      } else {
        return {
          el
        }
      }
    })
    setOrder(newOrder);
  }
  

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY
      }
    })
      .then(response => response.json())
      .then(data => {
        data.featured && setGoods(data.featured)
        setLoading(false)
      })
  }, [])
  return (
    <div className="content">
      <div className="container">
        <Card quantity={order.length} handleBasketShow={handleBasketShow}/>
        {isBasketShow && <BasketList 
          order={order} 
          handleBasketShow={handleBasketShow} 
          removeFromBasket={removeFromBasket}
          incrementQunatity={incrementQunatity}
          decrementQuantity={decrementQuantity}
        />}
        {loading ? <Loader /> : <Goods data={goods} addToBacket={addToBacket} />}
      </div>
    </div>
  )
}
export default Main