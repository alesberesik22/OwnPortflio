import React from 'react'
import { CTA } from './CTA'
import ME from '../../assets/images/me.png'
import HeaderSocials from './HeaderSocials'

import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ales Beresik</h1>
        <h5 className="text-light">Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt={"me"}/>
        </div>
        <a href="#contact" className='scroll_down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header