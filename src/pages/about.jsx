import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import SEO from '../components/seo'
import PageContainer from '../components/page-container'

const About = () => (
  <>
    <SEO title="About" />
    <PageContainer>
      <Container>
        <div className="heading">
          <h1>
            A consultancy built for the
            <br />
            modern world by humans for humans
          </h1>
        </div>
        {/* TODO Switch to graphQL for content the below is dup with index */}
        <p>
          We’re a Bournemouth based and globally operating, engineering and
          product consultancy specialising in <Bold>User Experience</Bold>,{" "}<Bold>React.js</Bold>{" "}and{" "}
          <Bold>React Native</Bold>,{" "}<Bold>GraphQL</Bold>,{" "}<Bold>Node.js</Bold>{" "}and the extended Javascript ecosystem.
          In short, we build high quality exclusive mobile and web applications.
          <br />
          Humancrafted was founded by{" "}<a href="https://www.linkedin.com/in/mitchclay/" target="_blank">
          Mitch Clay
        </a> to bring together a unique
          group of individuals with a shared dream of creating a livelihood
          doing what they love.
          <br />
          From his experience working for companies like <Bold>Visa</Bold>, <Bold>The Telegraph</Bold> and
          multiple startups he saw the unique challenges small to large
          businesses face everyday to deliver exceptional experiences through
          technology.
          He's not new to the space working previously with businesses like <Bold>The App Business</Bold>, <Bold>Big Radical</Bold> and <Bold>Bentley</Bold>.
        </p>
        <p className="links">
          Find Mitch here:{' '}
          <a href="https://www.linkedin.com/in/mitchclay/" target="_blank">
            Linkedin
          </a>
          ,
{' '}
          <a href="https://medium.com/@mitchclay0" target="_blank">
            {' '}
            Medium
          </a>
          ,{' '}
          <a href="https://twitter.com/MitchClay0" target="_blank">
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
  margin-top: 90px;
  ${media.greaterThan('medium')`
    margin-top: 0px;
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
