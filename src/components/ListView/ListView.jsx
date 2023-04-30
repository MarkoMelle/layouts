import React from 'react';
import './ListView.css';

function ListView(props) {
  const { products } = props;
  return (
    <ul className='shop-list'>
      {products.map((product, index) => {
        return <ShopCard product={product} key={index} />;
      })}
    </ul>
  );
}

function ShopCard(props) {
  const { product } = props;
  return (
    <div className='shop-item'>
      <h2 className='shop-item__title grid-item'>{product.name}</h2>
      <span className='shop-item__color grid-item'>{product.color}</span>
      <img
        className='shop-item__img grid-item'
        src={product.img}
        alt={product.name}
      />
      <div className='purchase__price  grid-item'>${product.price}</div>
      <button className='purchase__add-btn grid-item'>
        Добавить в корзину
      </button>
    </div>
  );
}

export default ListView;
