import styled from 'styled-components'
import React from 'react'
import media from 'styled-media-query'
import './layout.css'

const PageContainer = props => <Container>{props.children}</Container>

export default PageContainer

const Container = styled.div`
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  ${media.greaterThan('medium')`
    padding-left: 70px;
    padding-right: 70px;
   `};
  ${media.greaterThan('large')`
    padding-left: 204px;
    padding-right: 204px;
   `};
`
