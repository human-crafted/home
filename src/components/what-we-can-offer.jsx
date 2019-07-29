import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import PageContainer from './page-container'
import PageLink from './page-link'

const Item = ({ number, title, children, top, last }) => (
  <ItemContainer top={top} last={last}>
    <div className="headings">
      <h3>{number}</h3>
      <h3 className="title">{title}</h3>
    </div>
    <p>{children}</p>
  </ItemContainer>
)

const ItemContainer = styled.div`
  .headings {
    ${media.greaterThan('medium')`
      height: 100px;
  `};
  }
  ${p =>
    p.top
      ? media.greaterThan('medium')
        ? `margin-bottom: 50px`
        : `margin-bottom: 40px`
      : ''};
  h3 {
    margin-bottom: 8px;
  }
  p {
    margin-top: 4px;
    color: ${p => p.theme.colors.grey};
  }
  ${media.greaterThan('medium')`
     flex-basis: 42%;
     margin-right: 8%;
  `};
  ${p => p.last && media.greaterThan('huge')`margin-right: 0`};
  ${media.greaterThan('huge')`
      margin-bottom: 0;
      flex: 1
  `};
`

const WhatWeCanOffer = props => (
  <Background black={props.black}>
    <PageContainer>
      <Container>
        <h2>What We Can Offer You</h2>
        <div className="grid">
          <Item number="01" title="Product Design" top>
            Qualified UX experts with users at heart, helping you research,
            refine and test your product road-map.
          </Item>
          <Item number="02" title="Architecture and Auditing" top>
            Get it right with architecture that scales across large teams and
            huge user bases. Improve your applications metrics with deep code
            introspection.
          </Item>
          <Item number="03" title="Frontend - Web and Mobile Applications">
            Quality frontend code, build by design-savvy engineers that love
            sleak solutions.
          </Item>
          <Item number="04" title="Backend / Cloud Platform" last>
            Enterprise backend systems in Node.js, including service
            architecture, cloud deployment and scalability.
          </Item>
        </div>
        <PageLink to="/what-we-do">What we do</PageLink>
      </Container>
    </PageContainer>
  </Background>
)

export default WhatWeCanOffer

const Container = styled.div`
  padding: 45px 0px;
  h2 {
    line-height: 2.25rem;
    margin-bottom: 45px;
    width: 160px;
  }
  ${media.greaterThan('medium')`
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
  ${p => p.black && `background-color: ${p.theme.colors.secondary}`}
`
