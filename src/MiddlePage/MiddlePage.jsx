import React from 'react'
import './MiddlePage.css'
import { Company } from '../assets/Data'

const MiddlePage = () => {
  return (
    <div>
      <h3 className='Guiders-column'>Our people comes from </h3>
      <div className='companies_List'>
        {Company.map((item,index)=>{
            return (
                <div key={index}>
                    <img className='company_image' src={item.company_name} />

                </div>
            )
            
        })}
        

      </div>
      
    </div>
  )
}

export default MiddlePage

