import React from 'react'
import { priceMenu } from '../assets/Data'
import './Pricing.css'

const Pricing = () => {
  return (
    <div>
      <h1 className='Pricing'>Pricing</h1>
      <div className='price_list'>
        {priceMenu.map((item,index)=>{
            return (
                <div key={index} className='price_menu'>
                   <h3 className="item_price">{item.price}</h3>
<ul className="price_list_bio">
  <li className="bio">{item.bio1}</li>
  <li className="bio">{item.bio2}</li>
  <li className="bio">{item.bio3}</li>
</ul>

                    
                    <button className='price_menu_button'>Proceed to Pay</button>
                </div>
            )
                
        })}
      </div>
    </div>
  )
}

export default Pricing
