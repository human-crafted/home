import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import PageContainer from './page-container'

const TextBanner = props => (
  <TextItem
    right={props.right}
    clear={props.clear}
    headerRight={props.headerRight}
    small={props.small}
  >
    <PageContainer>
      <div className="container">
        <div>{props.children}</div>
      </div>
    </PageContainer>
  </TextItem>
)

export default TextBanner

const TextItem = styled.div`
  z-index: 999;
  padding: 45px 0px;
  display: flex;
  width: 100vw;
  height: 110vh;
  align-items: center;
  justify-content: center;
  ${p => p.right && `
    .container {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  `};
  ${p => !p.clear && `background-color: ${p.theme.colors.secondary}}`};
  h1 {
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
      max-width: ${p => (p.small ? `600px` : `40vw`)};
      }
     h1 {
      margin-bottom: 80px;
      }
    `};
`
