import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'
import PageContainer from './page-container'

const PageEnd = props => (
  <PageContainer>
    <Container>
      <h1>
        Here more{" "}
        <StyledLink to="/what-we-do">about us</StyledLink>
      </h1>
      <p>Humancrafted 2019</p>
    </Container>
  </PageContainer>
)

export default PageEnd

const StyledLink = styled(Link)`
  color: white;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
