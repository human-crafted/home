import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa'

const SocialIcon = ({ Icon, link }) => (
  <Item>
    <a href={link}>
      <Icon size={18} />
    </a>
  </Item>
)

const SocialIcons = () => (
  <SocialIconsContainer>
    <SocialIcon
      Icon={FaLinkedinIn}
      link="https://www.linkedin.com/company/human-crafted-tech"
    />
    <SocialIcon
      Icon={FaInstagram}
      link="https://www.linkedin.com/company/human-crafted-tech"
    />
    <SocialIcon
      Icon={FaTwitter}
      link="https://www.linkedin.com/company/human-crafted-tech"
    />
  </SocialIconsContainer>
)

export default SocialIcons

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  ${media.greaterThan('medium')`
    display: block;
    position: fixed;
    bottom: 4vh;
  `};
`

const Item = styled.div`
  padding-left: 24px;
  padding-bottom: 12px;
  ${media.greaterThan('large')`
     padding-left: 34px;
     padding-bottom: 17px;
  `};
  a {
    color: ${p => p.theme.colors.grey};
    transition: 0.2s ease-in-out;
  }
  a:hover {
    color: white;
  }
`
