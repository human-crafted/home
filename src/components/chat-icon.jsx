import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import media from 'styled-media-query'
import { FaComments } from 'react-icons/fa'

const ChatIcon = () => (
  <SocialIconsContainer to="/contact">
    <div className="svg-container">
      <FaComments size={26} />
    </div>
  </SocialIconsContainer>
)

export default ChatIcon

const SocialIconsContainer = styled(Link)`
  display: none;
  ${media.greaterThan('medium')`
    margin-right: 24px;
    margin-bottom: 12px;
    display: block;
    position: fixed;
    bottom: 4vh;
    color: black;
    z-index: 100;
    width: 50px;
    height: 50px;
    right: 0;
    .svg-container {
      position: absolute;
      height: 50px;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
 
    :after {
      content: '';
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: 25px;
      background-color: white;
      bottom: 0;
      left: 0;
      z-index: 0;
    }
  `};
  ${media.greaterThan('medium')`
    margin-right: 34px;
    margin-bottom: 17px;
  `};
`
