import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import WhatWeCanOffer from '../components/what-we-can-offer'
import SEO from '../components/seo'
import { keyWords } from '../seo/keywords'
import Process from '../components/process'
import ProjectList from '../components/project-List'
import PageEnd from '../components/page-end'
import Hero from '../components/hero'
import Intro from '../components/intro'

const IndexPage = props => (
  <>
    <SEO title="Home" keywords={keyWords} />
    <Hero image={props.data.takeOffImg} />
    <Intro />
    <WhatWeCanOffer link />
    {/*<DeskImage fluid={props.data.deskImg.childImageSharp.fluid} />*/}
    <Process />
    <ProjectList />
    <PageEnd text="Hear more" linkText="about us" link="/about" black />
  </>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    deskImg: file(relativePath: { eq: "desk.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    takeOffImg: file(relativePath: { eq: "take-off.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const DeskImage = styled(Img)`
  display: none;
  height: 75vh;
  ${media.greaterThan('medium')`
    display: block;
  `};
`
