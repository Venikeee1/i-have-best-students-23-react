import React from 'react'
import ProductCard from './components/ProductCard'
import './App.css'

function App() {
  // const image = React.createElement('img', {
  //   src:
  //     'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
  //   alt: 'Tacos With Lime',
  //   width: 640,
  // })

  return (
    <div className="container">
      <ProductCard />
    </div>
  )
}

export default App
