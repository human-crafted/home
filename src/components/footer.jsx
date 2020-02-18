import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Footer = ({ black }) => (
  <FooterContainer black={black}>
    <FooterLink to="/privacy-policy" title="Privacy Policy">
      Privacy Policy
    </FooterLink>
    <LinkSeparator />
    <FooterLink to="/terms-of-service" title="Terms of Service">
      Terms of Service
    </FooterLink>
    <LinkSeparator />
    <FooterLink to="/">
      Human Crafted Technology Ltd - {new Date().getFullYear()}
    </FooterLink>
    <br />
    <FooterLink>Company No. 11756514</FooterLink>
    <LinkSeparator />
    <FooterLink>VAT No. 313340255</FooterLink>
  </FooterContainer>
)

const LinkSeparator = () => <>&nbsp;&middot;&nbsp;</>

export default Footer

const FooterContainer = styled.div`
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
