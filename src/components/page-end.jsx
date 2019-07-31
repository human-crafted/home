import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PageContainer from './page-container'

const PageEnd = ({ text, link, linkText, black }) => (
  <Background black={black}>
    <PageContainer>
      <Container>
        <h1>
          {text} <StyledLink to={link}>{linkText}</StyledLink>
        </h1>
      </Container>
    </PageContainer>
  </Background>
)

export default PageEnd

const StyledLink = styled(Link)`
  color: white;
`

const Background = styled.div`
  ${p => p.black && `background-color: black;`}
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 26px);
`
