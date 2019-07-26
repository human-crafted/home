import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import PageContainer from './page-container'

const TextBanner = props => (
  <TextItem>
    <PageContainer>{props.children}</PageContainer>
  </TextItem>
)

export default TextBanner

const TextItem = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  width: 100vw;
  justify-content: center;
  background-color: ${p => p.theme.colors.secondary}};
  br {
    line-height: 60px;
  }
  p {
    ${media.greaterThan('medium')`
      max-width: 60vw;
    `};
    margin: 0;
  }
`
