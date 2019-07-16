import styled from 'styled-components'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import Item from './item'

const NavBarDesktop = () => {
  const [show, setShow] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    setScrollPosition(document.body.getBoundingClientRect().top)
    setShow(document.body.getBoundingClientRect().top > scrollPosition)
  }

  if (typeof window !== 'undefined') {
    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    })
  }

  return (
    <Transition>
      <Header className={show ? 'active' : 'hidden'}>
        <List>
          <Item to="/about" text="About" />
          <Item to="/what-we-do" text="What we do" />
          <Item to="/work-with-us" text="Work with us" />
        </List>
      </Header>
    </Transition>
  )
}

NavBarDesktop.propTypes = {
  siteTitle: PropTypes.string,
}

NavBarDesktop.defaultProps = {
  siteTitle: ``,
}

export default NavBarDesktop

const List = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const Header = styled.header`
  position: fixed;
  width: 100vw;
  height: 90px;
  background-color: ${p => p.theme.colors.primary};
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  padding-left: 50px;
  justify-content: flex-start;
`

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`
