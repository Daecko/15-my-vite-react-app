import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='productCont'>
        <img id='productImage' alt='product image'/>
        <div className='productInfo'>
          <p className='headline'>
            Shift the overall look and feel by adding these wonderful touches to furniture in your home
          </p>
          <p className='subtitle'>
            Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.
          </p>
          <div className='publicationInfo'>
            <div className='profileInfo'>
              <img id='pfpImage' alt='profile picture' />
              <div className='profileSideInfo'>
                <p id='name'>Michelle Appleton</p>
                <p id='date'>28 Jun 2020</p>
              </div>
            </div>
            <img id='share' alt='share icon' />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
