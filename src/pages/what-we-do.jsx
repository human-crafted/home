import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import TextBanner from '../components/text-banner'
import PageLink from '../components/page-link'
import WhatWeCanOffer from '../components/what-we-can-offer'
import PageEnd from '../components/page-end'

const WhatWeDo = props => (
  <>
    <SEO title="What We Do" />
    <Container>
      <div className="header">
        <HeroImage fluid={props.data.successImg.childImageSharp.fluid} />
        <TextBanner clear>
          <h1>Quality software done right</h1>
          <p>
            Humancrafted partners with clients to create solutions to the
            toughest user and software problems. Focusing on Javascript as our
            core technology, we utilise React.js and React Native, GraphQL,
            Node.js and the extended Javascript ecosystem to build web apps,
            mobile apps, cloud services and more.
            <br />
            Our approach is tailored to each product so we will always work with
            your team to select the technologies best suited to your needs. No
            matter where you are in the product life cycle our expertise can
            help.
          </p>
          <PageLink to="/contact">Lets get started</PageLink>
        </TextBanner>
      </div>
      <WhatWeCanOffer black />
      <TextBanner clear>
        <h1>New Products & MVPs</h1>
        <p>
          You know what needs to happen next, and you have a vision for the
          solution you need to build. Either way, you need to deliver it fast -
          and that’s the problem because getting things done isn’t easy. We help
          clients bring their concept to life. Whether you’re a startup creating
          a proof of concept to help with funding, an engineering organization
          building a minimal viable product (MVP) and hoping to train your team
          along the way, or a well-established product group getting ready to
          build a new web or mobile app, our team can help you achieve your
          goals.
          <br />
          Humancrafted’s expertise and leadership will help you create a
          sustainable and maintainable product that you'll be able to carry into
          the future even when we're done. We will guide you through every step
          of the process from determining the best UI/UX, to exploring the best
          way to keep your users engaged, to setting up backend and cloud
          services, to establishing best practices, and more.
        </p>
      </TextBanner>
      <TextBanner right>
        <h1>Existing Products</h1>
        <p>
          Maybe you’re looking to modernize your product, transition to a new
          technology, or troubleshoot issues, regardless Humancrafted can help.
          We can audit your product, help identify areas for improvement, select
          the technology to help advance your product and implement solutions to
          help you reach your goals. We will work closely with you to create
          lasting solutions to build the product your users deserve alongside
          the skills required keep driving forward.
          <br />
          Transitioning to new technology can be hard, we get it, so we’re here
          to help guide you through the process and common pain points. Teaching
          you along the way to avoid common pitfalls.
        </p>
      </TextBanner>
      <PageEnd text="Have an idea?" linkText="Talk to us." link="/contact" />
    </Container>
  </>
)

export const pageQuery = graphql`
  query {
    successImg: file(relativePath: { eq: "success.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default WhatWeDo

const HeroImage = styled(Img)`
  z-index: 0;
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.07;
`

const Container = styled.div`
  .header {
    position: relative;
    min-height: 100vh;
    overflow: hidden;
  }
  br {
    line-height: 60px;
  }
  margin-top: -60px;
  ${media.greaterThan('medium')`
    margin-top: -90px;
  `};
  .heading {
    padding-top: 90px;
    display: flex;
    align-items: center;
  }
`
