import { useState } from 'react'
import './App.css'
import Product from './product'

function App() {
  
  const productName = "Buzdolabı";
  

  return (
    <div>
      <Product productName = "Ayakkabı" price ={3200} />
      <hr />
      <Product productName = "Pantolon" price ={900} />
      <hr />
      <Product productName = {productName} price ={10000} />


    </div>
  )
}

export default App
