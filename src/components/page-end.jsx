import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PageContainer from './page-container'

const PageEnd = () => (
  <PageContainer>
    <Container>
      <h1>
        Here more <StyledLink to="/what-we-do">about us</StyledLink>
      </h1>
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
  height: calc(100vh - 26px);
`
