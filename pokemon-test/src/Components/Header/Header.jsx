import React from 'react'
import {NavLink} from 'react-router-dom'
import LogoSvg from '../LogoSvg/LogoSvg'
const Header = () => {
    return (
      <header className={'header'}>
          <NavLink to={'/pokemon'}>
           <LogoSvg width={'141px'} height={'61px'} />
          </NavLink>
      </header>
    )
}

export default Header
