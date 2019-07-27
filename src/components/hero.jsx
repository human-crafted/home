import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import PageContainer from './page-container'

const Hero = () => (
  <PageContainer>
    <HeroContainer>
      <div className="container">
        <h1>The digital product consultancy trusted by engineers</h1>
        <h5>Web, Mobile Development & Design</h5>
      </div>
      <div className="scroll">
        <p>
          Scroll down to
          <br />
          see the whole page
        </p>
      </div>
    </HeroContainer>
  </PageContainer>
)

export default Hero

const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  ${media.greaterThan('medium')`
    margin-top: -90px;
  `};
  display: flex;
  justify-content: center;
  flex-direction: column;
  .container {
    margin-top: auto;
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
    text-align: center;
    align-self: center;
    margin-top: auto;
    font-size: 12px;
    line-height: 16px;
    font-weight: bold;
    p {
      margin-bottom: 12px;
    }
  }
`
