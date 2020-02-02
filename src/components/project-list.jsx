import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import background from '../assets/howly-bg.svg'
import PageContainer from './page-container'

const Project = () => {
  const data = useStaticQuery(graphql`
    query {
      howlyLogoImg: file(relativePath: { eq: "howly-logo.png" }) {
        childImageSharp {
          fluid(maxHeight: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <ProjectContainer to="/howly">
      <HowlyLogoImg
        fluid={data.howlyLogoImg.childImageSharp.fluid}
        alt="Howly logo"
      />
      <h2>
        React Native, Node.js, AWS,
        <br /> Serverless, Product Design
      </h2>
      <p>The snapchat of events, Howly keeps you and your friends connected</p>
    </ProjectContainer>
  )
}

const HowlyLogoImg = styled(Img)`
  margin: 0 0 1.45rem;
  min-width: 175px;
  width: 20%;
`

const ProjectContainer = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 25vw;
  min-height: 350px;
  max-height: 400px;
  margin-bottom: 40px;
  border-radius: 3px;
  background-color: #431190;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px 20px 0px 20px;
  box-shadow: 0px 2px 16px -6px #000000;
  transition: 0.2s ease-in-out;
  flex-basis: 100%;
  img {
    width: 20%;
    min-width: 175px;
  }
  :hover {
    transform: translate(0px, -8px);
    transition: 0.2s ease-in-out;
  }
`

const Article = ({ link, title, views, last }) => (
  <ArticleContainer href={link} target="_blank" rel="noopener" last={last}>
    <h3>{title}</h3>
    {views && <p>Views {views}+</p>}
  </ArticleContainer>
)

const ArticleContainer = styled.a`
  margin-bottom: 40px;
  width: 100%;
  background-color: ${p => p.theme.colors.secondary};
  box-shadow: 0px 2px 16px -6px #000000;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 20px 0px 20px;
  color: white;
  text-decoration: none;
  height: 250px;
  transition: 0.2s ease-in-out;
  p {
    margin: 0;
    color: ${p => p.theme.colors.grey};
    font-size: 14px;
  }
  ${media.greaterThan('medium')`
      height: 20vw;
      max-height: 200px;
      ${p => !p.last && 'margin-right: 20px;'}
  `}
  :hover {
    transform: translate(0px, -8px);
  }
`

const Process = () => (
  <PageContainer>
    <Container>
      <div className="heading">
        <h1>Recent Work</h1>
      </div>
      <Project />
      <div className="articles">
        <Article
          title="How to build a React Native Android library"
          views="3030"
          link="https://medium.com/@mitchclay0/how-to-build-a-react-native-android-library-5c1eb22d17e1"
        />
        <Article
          title="Building a dashboard with React & GraphQL"
          views="3150"
          link="https://medium.com/hackernoon/building-a-dashboard-with-react-graphql-de4203eee6c9"
        />
        <Article
          last
          title="Progressive Web Apps. The future… 🚀"
          link="https://medium.com/@mitchclay0/progressive-web-apps-the-future-6f3b2bf32e75"
        />
      </div>
    </Container>
  </PageContainer>
)

export default Process

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 45px;
  .heading {
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-bottom: 45px;
  }
  .articles {
    width: 100%;
    flex-direction: column;
    display: flex;
    ${media.greaterThan('medium')`
      flex-direction: row;
    `}
  }
`
