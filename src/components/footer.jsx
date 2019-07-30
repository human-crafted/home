import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Footer = () => (
  <FooterContainer>
    <FooterLink>Human Crafted Technology ltd - 2019</FooterLink>
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
