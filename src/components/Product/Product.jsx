import React from 'react'
import ProductCard from './ProductCard'
import { product_data } from '../../data/data'
const Product = ({addToCart,cart,removeItemFromCart}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {product_data.map((product, index) => {

          const cartQuantity = cart.find(ct=>ct.name===product.name);

          const ctQ=cartQuantity?.quantity;
          console.log(ctQ);

          return (
          <ProductCard key={index} ctQ={ctQ} addToCart={addToCart} removeItemFromCart={removeItemFromCart} product={product} />

          )
        })}
      

    </div>
  )
}

export default Product
