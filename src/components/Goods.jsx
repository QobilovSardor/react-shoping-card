import { useContext } from 'react';
import { ShopContext } from '../context';
import GoodsItem from './GoodsItem';

function Goods() {
  const {data = []} = useContext(ShopContext);
  
  if(!data.length) {
    return <h3>Nothing here</h3>
  }
  return (
    <div className='goods'>
      {data.map(item => (
        <GoodsItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Goods;