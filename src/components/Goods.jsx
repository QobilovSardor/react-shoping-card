import GoodsItem from './GoodsItem';
function Goods({data = [], addToBacket}) {
  if(!data.length) {
    return <h3>Nothing here</h3>
  }
  return (
    <div className='goods'>
      {data.map(item => (
        <GoodsItem key={item.id} {...item} addToBacket={addToBacket} />
      ))}
    </div>
  );
}

export default Goods;