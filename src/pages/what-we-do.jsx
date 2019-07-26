import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PageContainer from '../components/page-container'
import TextBanner from '../components/TextBanner'
import PageLink from '../components/page-link'

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
          cloud services and more. Our approach is tailored to each product so
          we will always work with your team to select the technologies best
          suited to your needs. No matter where you are in the product life
          cycle our expertise can help.
        </p>
        <PageLink to="/work-with-us">Lets get started</PageLink>
      </TextBanner>
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
    max-width: 750px;
  `};
  .heading {
    height: 25vh;
    display: flex;
    align-items: center;
  }
  min-height: 85vh;
`
