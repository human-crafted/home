import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Footer = ({ black }) => (
  <FooterContainer black={black}>
    <FooterLink to="/">
      Human Crafted Technology Ltd - {new Date().getFullYear()}
    </FooterLink>
  </FooterContainer>
)

export default Footer

const FooterContainer = styled.div`
  height: 30px;
  margin: 0;
  clear: both;
  width: 100%;
  position: relative;
  text-align: center;
  ${p => p.black && `background-color: black;`}
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
