import React from 'react'
import './Home.css'
import flashsale from '../src/Pics/flashsale.png'
import Product from './Product'
import Blazer from '../src/Pics/Blazer.png'
import Blackshirt from '../src/Pics/Blackshirt.jpg'
function Home() {
  return (
    <div className='Home'>
        <div className="home_container">
            <img src={flashsale} className="flashsale" alt="logo" />

        <div className="home_row">
          {/*Product description------------------------------------------------->*/}
          <Product
          category=''
          id=''
          title=''
          image=''
          price=''
          rating=''
          />
          {/*Product description------------------------------------------------->*/}
          <Product
          category=''
          id=''
          title=''
          image=''
          price=''
          rating=''
          />
        </div>

        <div className="home_row">
          {/*Product description------------------------------------------------->*/}
          <Product
          category=''
          id=''
          title=''
          image=''
          price=''
          rating=''
          />
          {/*Product description------------------------------------------------->*/}
          <Product
          category=''
          id=''
          title=''
          image=''
          price=''
          rating=''
          />
          {/*Product description------------------------------------------------->*/}
          <Product
          category=''
          id=''
          title=''
          image=''
          price=''
          rating=''
          />
        </div>
        <div className="home_row">
          {/*Product description------------------------------------------------->*/}
          <Product
          category=''
          id=''
          title=''
          image=''
          price=''
          rating=''
          />
        </div>
      </div>

    </div>
  )
}

export default Home