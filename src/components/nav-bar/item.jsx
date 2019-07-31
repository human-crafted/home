import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import media from 'styled-media-query'

const Item = ({ text, to, closeMenu }) => (
  <HeaderItem>
    <NavLink
      to={to}
      activeClassName="active"
      onClick={closeMenu || (() => null)}
    >
      {text}
    </NavLink>
  </HeaderItem>
)

export default Item

const NavLink = styled(Link)`
  font-size: 2em;
  ${media.greaterThan('medium')`
   font-size: 1em;
   font-weight: normal;
  `};
  text-align: center;
  font-weight: bold;
  color: ${p => p.theme.colors.grey};
  text-decoration-line: none;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  :before {
    content: '';
    ${media.greaterThan('medium')`
     bottom: 0;
    `};
    height: 1px;
    background-color: rgb(157, 157, 157);
    transform: translate(0%, 0%) scaleX(0);
    transform-origin: 0% 0%;
    bottom: -8px;
    width: 100%;
    position: absolute;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }
  :hover {
    color: rgb(255, 255, 255);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }
  :hover:before {
    background-color: rgb(255, 255, 255);
    transform: translate(0%, 0%) scaleX(1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }
`

const HeaderItem = styled.li`
  flex: 1;
  max-height: 80px;
  ${media.greaterThan('medium')`
    flex: unset;
    max-height: unset;
  `};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding-right: 20px;
  padding-left: 20px;
  .active {
    color: rgb(255, 255, 255);
    :before {
      background-color: rgb(255, 255, 255);
      transform: translate(0%, 0%) scaleX(1);
    }
  }
`
