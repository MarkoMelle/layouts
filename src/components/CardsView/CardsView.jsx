import React from 'react';
import './CardsView.css';

function CardsView(props) {
  const { products } = props;
  return (
    <div className='shop-cards'>
      {products.map((product, index) => {
        return <ShopCard product={product} key={index} />;
      })}
    </div>
  );
}

function ShopCard(props) {
  const { product } = props;
  return (
    <div className='shop-card'>
      <h2 className='shop-card__title'>{product.name}</h2>
      <span className='shop-card__color'>{product.color}</span>
      <img
        className='shop-card__img'
        draggable='false'
        src={product.img}
        alt={product.name}
      />
      <div className='shop-card__purchase'>
        <div className='purchase__price'>${product.price}</div>
        <button className='purchase__add-btn'>Добавить в корзину</button>
      </div>
    </div>
  );
}

export default CardsView;
