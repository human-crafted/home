import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { keyWords } from '../seo/keywords'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={keyWords} />
    <LayoutContainer>
      <Hero>
        <div className="container">
          <h1>The digital product consultancy trusted by engineers</h1>
          <h4>Web, Mobile Development & Design</h4>
        </div>
      </Hero>
      <TextItem>
        <div className="container">
          <p>
            We’re a Bournemouth based and globally operating, engineering and
            product consultancy specialising in User Experience, React.js and
            React Native, GraphQL, Node.js and the extended Javascript
            ecosystem. In short, we build high quality exclusive mobile and web
            applications.
            <br />
            Launching a new product? Need help with an existing project?
            <br />
            Work with us
          </p>
        </div>
      </TextItem>
    </LayoutContainer>
  </Layout>
)

export default IndexPage

const LayoutContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Hero = styled.div`
  height: calc(100vh - 90px);
  display: flex;
  width: 86vw;
  .container {
    width: 550px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    h4 {
      color: ${p => p.theme.colors.grey};
      font-family: ${p => p.theme.fonts.primary.light};
      font-weight: unset;
    }
  }
`

const TextItem = styled.div`
  padding: 40px;
  display: flex;
  width: 100vw;
  justify-content: center;
  background-color: ${p => p.theme.colors.secondary}};
  .container {
    width: 86vw;
  }
  br {
    line-height: 60px;
  }
  p {
    margin: 0;
  }
`
