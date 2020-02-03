import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import PageContainer from '../components/page-container'
import SEO from '../components/seo'

const About = () => (
  <>
    <SEO title="About" />
    <PageContainer>
      <Container>
        <div className="heading">
          <h1>A consultancy built for the modern world</h1>
        </div>
        {/* TODO Switch to graphQL for content the below is dup with index */}
        <p>
          We’re a Bournemouth, UK based and globally operating engineering and
          product consultancy specialising in <Bold>User Experience</Bold>,{' '}
          <Bold>React.js</Bold> and <Bold>React Native</Bold>,{' '}
          <Bold>GraphQL</Bold>, <Bold>Node.js</Bold> and the extended Javascript
          ecosystem. In short, we build high quality exclusive mobile and web
          applications.
          <br />
          Humancrafted was founded by{' '}
          <a
            href="https://www.linkedin.com/in/mitchclay/"
            target="_blank"
            rel="noopener noreferrer"
            title="Mitch on LinkedIn"
          >
            Mitch Clay
          </a>{' '}
          to bring together a unique group of individuals with a shared dream of
          creating the best products.
          <br />
          From his experience working for companies like <Bold>Visa</Bold>,{' '}
          <Bold>The Telegraph</Bold> and multiple startups he saw the unique
          challenges small to large businesses face everyday to deliver
          exceptional experiences through technology. He's not new to the space
          working previously with businesses like <Bold>The App Business</Bold>,{' '}
          <Bold>Big Radical</Bold> and <Bold>Bentley</Bold>.
        </p>
        <p className="links">
          Find Mitch here:{' '}
          <a
            href="https://www.linkedin.com/in/mitchclay/"
            target="_blank"
            rel="noopener"
            title="Mitch on LinkedIn"
          >
            LinkedIn
          </a>
          ,{' '}
          <a
            href="https://medium.com/@mitchclay0"
            target="_blank"
            rel="noopener noreferrer"
            title="Mitch on Medium"
          >
            {' '}
            Medium
          </a>
          ,{' '}
          <a
            href="https://twitter.com/MitchClay0"
            target="_blank"
            rel="noopener noreferrer"
            title="Mitch on Twitter"
          >
            Twitter
          </a>
        </p>
      </Container>
    </PageContainer>
  </>
)

export default About

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
  .heading {
    flex: 1;
    display: flex;
    align-items: center;
  }
  a {
    color: white;
  }
  .links {
    font-size: 16px;
    color: white;
  }
  ${media.greaterThan('medium')`
    max-width: 750px;
  `};
  min-height: 85vh;
  p {
    color: ${p => p.theme.colors.grey};
  }
  br {
    line-height: 60px;
  }
`

const Bold = styled.span`
  color: white;
`
