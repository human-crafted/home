import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import PageContainer from './page-container'
import PageLink from './page-link'

const Process = props => (
  <Background>
    <PageContainer>
      <Container>
        <h2>Process</h2>
        <p>
          We approach every project with a long-term view ensuing
          sustainability, maintainability and stability are always at the heart
          of our decisions. Our objective is to help you create quality products
          that people love, through outcome driven innovation, which will scale
          well and achieve your business goals. Humancrafted utilises agile
          methodologies to ensure an efficient and adaptable workflow helps meet
          our clients needs. We quickly identify solutions and work with you to
          create an efficient plan to ensure that we’re always delivering.
        </p>
        <PageLink to="/what-we-do">Read more</PageLink>
      </Container>
    </PageContainer>
  </Background>
)

export default Process

const Container = styled.div`
  padding: 45px 0px;
  h2 {
    line-height: 2.25rem;
    margin-bottom: 45px;
    width: 160px;
  }
  ${media.greaterThan('medium')`
    p {
      max-width: 60vw
    }
    padding: 90px 0px;
   .grid {
     display: flex;
     flex-wrap: wrap;
    }
    h2 {
    margin-bottom: 80px;
    }
  `};
`

const Background = styled.div`
  background-color: ${p => p.theme.colors.secondary};
`
