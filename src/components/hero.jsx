import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'
import PageContainer from './page-container'
import ScrollDown from './scroll-down'

const Hero = props => (
  <PageContainer>
    <HeroContainer>
      <div className="container">
        <h1>The digital product consultancy trusted by engineers</h1>
        <h5>Web, Mobile Development & Design</h5>
      </div>
      <div className="scroll">
        <ScrollDown />
        <p>
          Scroll down to
          <br />
          read more
        </p>
      </div>
      <TakeOff fluid={props.image.childImageSharp.fluid} />
    </HeroContainer>
  </PageContainer>
)

export default Hero

const TakeOff = styled(Img)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0.07;
`

const HeroContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: -60px;
  padding-top: 60px;
  ${media.greaterThan('medium')`
    margin-top: -90px;
    padding-top: 90px;
  `};
  display: flex;
  justify-content: center;
  flex-direction: column;
  .container {
    ${media.greaterThan('medium')`
     margin-top: auto;
  `};
    max-width: 500px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    h5 {
      color: ${p => p.theme.colors.grey};
      font-family: ${p => p.theme.fonts.primary.light};
      font-weight: bold;
    }
  }
  .scroll {
    display: none;
    ${media.greaterThan('medium')`
      display: block
  `};
    text-align: center;
    align-self: center;
    margin-top: auto;
    font-size: 12px;
    line-height: 16px;
    font-weight: bold;
    p {
      margin-bottom: 24px;
    }
  }
`
