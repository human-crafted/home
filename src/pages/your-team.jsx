import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import PageContainer from '../components/page-container'
import TeamMember from '../components/team-member'

const About = props => {
  return (
    <>
      <SEO title="Your Team" />
      <PageContainer>
        <Container>
          <div className="heading">
            <h1>Core Team</h1>
          </div>
          <p>
            Our team of experts are deeply invested in the technology & design
            community. We are passionate about delivering business value using
            our experience of working on projects for companies like: Visa, The
            Telegraph, PureGym, Fidelity and many more.
          </p>
        </Container>
        <TeamContainer>
          <TeamMember
            image={props.data.mitch}
            firstName="Mitch"
            jobRole="Founder & Developer"
            links={{
              medium: 'https://medium.com/@mitchclay0',
              linkedin: 'https://www.linkedin.com/in/mitchclay/',
              twitter: 'https://twitter.com/MitchClay0',
            }}
          />
          <TeamMember
            image={props.data.carl}
            firstName="Carl"
            jobRole="Fullstack Developer"
            links={{
              dev: 'https://dev.to/t/io',
              linkedin: 'https://linkedin.com/in/carlsaunders/',
            }}
          />
          <TeamMember
            image={props.data.sam}
            firstName="Sam"
            jobRole="Fullstack Developer"
            links={{
              linkedin: 'https://linkedin.com/in/samjsheppard/',
            }}
          />
        </TeamContainer>
      </PageContainer>
    </>
  )
}

export default About

export const pageQuery = graphql`
  query {
    mitch: file(relativePath: { eq: "team/mitch-small-1.png" }) {
      childImageSharp {
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sam: file(relativePath: { eq: "team/sam-small.png" }) {
      childImageSharp {
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carl: file(relativePath: { eq: "team/carl-small.png" }) {
      childImageSharp {
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .heading {
    display: flex;
    align-items: center;
  }
  .teamContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ${media.greaterThan('medium')`
    max-width: 750px;
  `};
  p {
    color: ${p => p.theme.colors.grey};
  }
  br {
    line-height: 60px;
  }
`

const TeamContainer = styled.div`
  width: 100%;
  max-width: 850px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ${media.greaterThan('medium')`
      flex-direction: row;
  `};
`
