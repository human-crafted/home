import media from 'styled-media-query'
import React from 'react'
import styled from 'styled-components'
import NavBarDesktop from './nav-bar-desktop'
import NavBarMobile from './nav-bar-mobile'

const NavBar = () => {
  return (
    <>
      <Desktop>
        <NavBarDesktop />
      </Desktop>
      <Mobile>
        <NavBarMobile />
      </Mobile>
    </>
  )
}

export default NavBar

const Desktop = styled.div`
  display: none;
  ${media.greaterThan('medium')`
    display: block;
    `}
`

const Mobile = styled.div`
  display: block;
  ${media.greaterThan('medium')`
    display: none;
    `}
`
