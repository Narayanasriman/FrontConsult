import React from 'react'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import MiddlePage from './MiddlePage/MiddlePage'
import FInd from './FInd/FInd'
import Pricing from './Pricing/Pricing'
import Questions from './Questions/Questions'


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <MiddlePage />
      <FInd />
      <Pricing />
      <Questions />
    </div>
  )
}

export default App
