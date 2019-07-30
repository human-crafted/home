import React from 'react'
import styled, { keyframes } from 'styled-components'
import media from 'styled-media-query'

const ScrollDown = () => (
  <Container>
    <div className="icon-scroll" />
  </Container>
)

export default ScrollDown

const animate = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateY(46px)
  }
`

const Container = styled.div`
  position: relative;
  .icon-scroll,
  .icon-scroll:before {
    position: absolute;
    left: 50%;
  }

  .icon-scroll {
    width: 30px;
    height: 53px;
    margin-left: -15px;
    margin-top: -70px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 20px;
  }

  .icon-scroll:before {
    content: '';
    width: 6px;
    height: 6px;
    background: white;
    margin-left: -3px;
    top: 3px;
    border-radius: 3px;
    animation: ${animate} 2s linear infinite;
  }
`
