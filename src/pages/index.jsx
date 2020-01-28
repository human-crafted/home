import React from 'react'
import { graphql } from 'gatsby'
import WhatWeCanOffer from '../components/what-we-can-offer'
import SEO from '../components/seo'
import { keyWords } from '../seo/keywords'
import Process from '../components/process'
import ProjectList from '../components/project-list'
import PageEnd from '../components/page-end'
import Hero from '../components/hero'
import Intro from '../components/intro'

const IndexPage = props => (
  <>
    <SEO title="Home" keywords={keyWords} />
    <Hero image={props.data.takeOffImg} />
    <Intro />
    <WhatWeCanOffer link />
    <Process />
    <ProjectList />
    <PageEnd text="Hear more" linkText="about us" link="/about" black />
  </>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    takeOffImg: file(relativePath: { eq: "take-off.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
