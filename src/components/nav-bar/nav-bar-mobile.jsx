import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import Item from './item'

const NavBarMobile = () => {
  return (
    <Menu right pageWrapId="page-wrap" outerContainerId="outer-container">
      <Item to="/about" text="About" />
      <Item to="/what-we-do" text="What we do" />
      <Item to="/work-with-us" text="Work with us" />
    </Menu>
  )
}

export default NavBarMobile
