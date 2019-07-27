import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PageContainer from '../components/page-container'
import TextBanner from '../components/TextBanner'
import PageLink from '../components/page-link'
import WhatWeCanOffer from '../components/what-we-can-offer'
import PageEnd from '../components/page-end'

const WhatWeDo = () => (
  <Layout>
    <SEO title="What We Do" />
    <Container>
      <PageContainer>
        <div className="heading">
          <h1>
            A mobile led world
            <br />
{' '}
built by humans
</h1>
        </div>
      </PageContainer>
      <TextBanner>
        <p>
          Humancrafted partners with clients to create solutions to the toughest
          user and software problems. Focusing on Javascript as our core
          technology, we utilise React.js and React Native, GraphQL, Node.js and
          the extended Javascript ecosystem to build web apps, mobile apps,
          cloud services and more.
          <br />
          Our approach is tailored to each product so we will always work with
          your team to select the technologies best suited to your needs. No
          matter where you are in the product life cycle our expertise can help.
        </p>
        <PageLink to="/work-with-us">Lets get started</PageLink>
      </TextBanner>
      <WhatWeCanOffer />
      <TextBanner>
        <h2>New Products & MVPs</h2>
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
          sustainable, maintainable product that your team can carry into the
          future once our work is done. We will guide you through every step of
          the process from determining the best UI/UX, to exploring the best way
          to keep your users engaged, to setting up backend and cloud services,
          to establishing best practices, and more.
        </p>
      </TextBanner>
      <TextBanner clear>
        <h2>Existing Products</h2>
        <p>
          Maybe you’re looking to modernize your product, transition your team
          to a new technology, or troubleshoot issues, regardless Humancrafted
          can help. We can audit your product, help identify areas for
          improvement, select the technology to help advance your product and
          implement solutions to help you reach your goals. We will work closely
          with you to create lasting solutions to help your teams build the
          skills they need to maintain and update the product once our work is
          done.
          <br />
          Transitioning to new technology can be hard, we get it, so we’re here
          to help guide you through the process and common pain points. Teaching
          you along the way to avoid common pitfalls.
        </p>
      </TextBanner>
      <PageEnd/>
    </Container>
  </Layout>
)

export default WhatWeDo

const Container = styled.div`
  br {
    line-height: 60px;
  }
  margin-top: 90px;
  ${media.greaterThan('medium')`
    margin-top: 0px;
  `};
  .heading {
    height: 25vh;
    display: flex;
    align-items: center;
  }
  min-height: 85vh;
`
