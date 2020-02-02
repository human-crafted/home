import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import appStore from '../assets/app-store.svg'
import background from '../assets/howly-bg.svg'
import PageContainer from '../components/page-container'
import SEO from '../components/seo'

const IndexPage = props => (
  <>
    <SEO title="Howly" />
    <PageContainer>
      <Container>
        <div className="content">
          <Img
            fluid={props.data.howlyLogoImg.childImageSharp.fluid}
            alt="Howly logo"
            className="howlyLogo"
          />
          <p>
            Stay connected with friends, invite and share when you're heading
            out
          </p>
        </div>
        <div className="extra">
          <a href="https://testflight.apple.com/join/Jqg137OC">
            <img
              src={appStore}
              alt="Download on the App Store"
              className="appStore"
            />
          </a>
          <code>ALPHA - Friends and family release</code>
        </div>
      </Container>
    </PageContainer>
  </>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    takeOffImg: file(relativePath: { eq: "take-off.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000, quality: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    howlyLogoImg: file(relativePath: { eq: "howly-logo.png" }) {
      childImageSharp {
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Container = styled.div`
  position: relative;
  text-align: center;
  padding: 0 20px;
  border-radius: 3px;
  background-color: #431190;
  box-shadow: 0 2px 16px -6px #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  .howlyLogo {
    width: 75vw;
    max-width: 300px;
    padding: 0;
    margin: 0 auto 1.45em;
  }
  .appStore {
    max-width: 125px;
    width: 25vw;
  }
  min-height: 85vh;
  code {
    margin-bottom: 0;
  }
  .content {
  }
  .extra {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    margin-bottom: 12px;
  }
`
