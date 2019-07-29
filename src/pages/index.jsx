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
    <Hero />
    <Intro />
    <WhatWeCanOffer link />
    <DeskImage fluid={props.data.deskImg.childImageSharp.fluid} />
    <Process />
    <ProjectList />
    <PageEnd />
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
  }
`

const DeskImage = styled(Img)`
  display: none;
  height: 75vh;
  ${media.greaterThan('medium')`
    display: block;
  `};
`
