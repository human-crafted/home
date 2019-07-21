import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { keyWords } from '../seo/keywords'
import PageContainer from '../components/page-container'
import PageLink from '../components/page-link'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={keyWords} />
    <PageContainer>
      <Hero>
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
      </Hero>
    </PageContainer>
    <TextItem>
      <PageContainer>
        <p>
          Humancrafted is a Bournemouth based and globally operating,
          engineering and product consultancy specialising in{' '}
          <b>User Experience</b>
,{' '}<b>React.js</b>
{' '}
and
          {' '}<b>React Native</b>,{' '}<b>GraphQL</b>,{' '}<b>Node.js</b>{' '}and the extended
          Javascript ecosystem. In short, we build high quality exclusive mobile
          and web applications.
          <br />
          Launching a new product? Need help with an existing project?
        </p>
        <PageLink to="/work-with-us">Work with us</PageLink>
      </PageContainer>
    </TextItem>
  </Layout>
)

export default IndexPage

const Hero = styled.div`
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

const TextItem = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  width: 100vw;
  justify-content: center;
  background-color: ${p => p.theme.colors.secondary}};
  br {
    line-height: 60px;
  }
  p {
    margin: 0;
  }
`
