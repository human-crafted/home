import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Item = ({ to, children }) => (
  <NavLink exact to={to}>
    {children}
    <Arrow size={18} />
  </NavLink>
)

export default Item

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 12px;
  color: ${p => p.theme.colors.grey};
  text-decoration: none;
  :hover {
    color: rgb(255, 255, 255);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }
`

const Arrow = styled(FaLongArrowAltRight)`
  margin-left: 4px;
  margin-top: 3px;
`
