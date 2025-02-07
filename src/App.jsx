import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [toggle, setToggle] = useState(false)
  const [shareImg, setShareImg] = useState('assets/share_icon.svg')
  window.onresize = () =>{
    document.querySelector('.holderCont').style.display = 'none'
    document.querySelector('.mobileShare').style.display = 'none'
  }
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
            <div className='shareCont'>
              <div className='holderCont'>
                <img id='mediaHolder' alt='media display' />
                <div className='shareMedia'>
                  <p id='mediaText'>SHARE</p>
                  <img id='mediaIcons' alt='facebook,twitter,pinterest icons' />
                </div>
              </div>
              <img id='share' alt='share icon' onClick={()=>{
                setToggle(!toggle)
                if(window.screen.availWidth>768){
                  document.querySelector('.holderCont').style.display = toggle ? 'none' : 'flex'
                } else {
                  document.querySelector('.mobileShare').style.display = 'flex'
                }
                console.log(toggle)
              }} />
            </div>
          </div>
          <div className='mobileShare'>
            <p className='mediaText'>SHARE</p>
            <img className='mediaIcons' alt='facebook,twitter,pinterest icons' />
            <img id='shareMobile' alt='shareIcon' onClick={() => {
              document.querySelector('.mobileShare').style.display = 'none'
            }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
