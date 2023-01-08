import React from 'react'
import './Product.css'



function Product({id,category,title, image, price, rating}) {
  return (
    <div className='Product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <strong>{price}</strong>
                <small> ksh</small>            
            </p>
            <div className='product_rating'>
              {Array(rating).fill().map(i =><p>⭐</p>)}
                
            </div>
        </div>
        <img src={image} className='product_img' alt=''/>
        <button className='zCart'>Add to Cart</button>
        

    </div>
  )
}

export default Product