import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Footer = () => (
  <FooterContainer>
    <FooterLink>
      2019
      <br />
      Human Crafted Technology ltd ©
    </FooterLink>
  </FooterContainer>
)

export default Footer

const FooterContainer = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const FooterLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  color: ${p => p.theme.colors.grey};
  transition: 0.2s ease-in-out;
  :hover {
    color: white;
  }
`
