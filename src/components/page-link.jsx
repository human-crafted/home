import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Item = ({ to, children }) => (
  <Container>
    <NavLink exact to={to}>
      {children}
      <Arrow size={18} />
    </NavLink>
  </Container>
)

export default Item

const Container = styled.div`
  padding: 30px 0px;
`

const NavLink = styled(Link)`
  color: ${p => p.theme.colors.grey};
  text-decoration: none;
  :hover {
    color: rgb(255, 255, 255);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }
`

const Arrow = styled(FaLongArrowAltRight)`
  margin-left: 8px;
  margin-bottom: -5px;
`
