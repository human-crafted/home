import React from 'react'
import { FaLinkedinIn, FaCuttlefish } from 'react-icons/fa'
import styled from 'styled-components'
import media from 'styled-media-query'

const SocialIcon = ({ Icon, link, top, title }) => (
  <Item top={top}>
    <a href={link} title={title}>
      <Icon size={18} />
    </a>
  </Item>
)

const SocialIcons = ({ mobile }) => (
  <SocialIconsContainer mobile={mobile}>
    <SocialIcon
      top
      Icon={FaLinkedinIn}
      link="https://www.linkedin.com/company/human-crafted-tech"
      title="Humancrafted on LinkedIn"
    />
    {/*<SocialIcon*/}
    {/*  top*/}
    {/*  Icon={FaInstagram}*/}
    {/*  link="https://www.linkedin.com/company/human-crafted-tech"*/}
    {/*/>*/}
    <SocialIcon
      Icon={FaCuttlefish}
      link="https://clutch.co/profile/humancrafted"
      title="Read our reviews on Clutch"
    />
  </SocialIconsContainer>
)

export default SocialIcons

const SocialIconsContainer = styled.div`
  ${p =>
    !p.mobile &&
    `
    display: none;
    ${media.lessThan('small')`
      display: flex;
    `};
  `};
  justify-content: center;
  ${media.greaterThan('medium')`
    display: block;
    position: fixed;
    bottom: 4vh;
  `};
  ${p =>
    p.mobile &&
    `
    flex-direction: row;
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  `};
`

const Item = styled.div`
  padding-left: 24px;
  padding-bottom: ${p => (p.top ? 36 : 12)}px;
  ${media.greaterThan('large')`
     padding-left: 34px;
     padding-bottom: ${p => (p.top ? 51 : 17)}px;
  `};
  a {
    color: ${p => p.theme.colors.grey};
    transition: 0.2s ease-in-out;
  }
  a:hover {
    color: white;
  }
`
