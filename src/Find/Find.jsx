import React from 'react'
import './Find.css'
import { Investor } from '../assets/Data'

const FInd = () => {
  return (
    <div>
      <h1 className='heading'>Find the Professional in seconds, not  hours </h1>
      <div className='Investor_list'>
        {Investor.map((item,index)=>{
            return (
                <div key={index} className='find'>
                    <img src={item.image} />
                    
                    <h2>{item.Name}</h2>
                    <h4>{item.desc}</h4>
                    </div>
            )
        })}


      </div>
    </div>
  )
}

export default FInd
