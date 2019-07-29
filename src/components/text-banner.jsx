import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import PageContainer from './page-container'

const TextBanner = props => (
  <TextItem clear={props.clear} headerRight={props.headerRight}>
    <PageContainer>{props.children}</PageContainer>
  </TextItem>
)

export default TextBanner

const TextItem = styled.div`
  padding: 45px 0px;
  display: flex;
  width: 100vw;
  justify-content: center;
  ${p => !p.clear && `background-color: ${p.theme.colors.secondary}}`};
  h2 {
    line-height: 2.25rem;
    margin-bottom: 45px;
  }
  br {
    line-height: 60px;
  }
  p {
    margin: 0;
  }
  ${media.greaterThan('medium')`
   padding: 90px 0px;
   p {
      max-width: 60vw;
      }
     h2 {
      margin-bottom: 80px;
      }
    `};
`
