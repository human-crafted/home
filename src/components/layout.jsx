/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import styled, { ThemeProvider } from 'styled-components'
// import 'normalize.css/normalize.css'
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import theme from '../theme'
import SocialIcons from './social-icons'
import ChatIcon from './chat-icon'

import NavBar from './nav-bar'
import './layout.css'


// Sizes
// Mobile - 16px
// Large - 24px
// Greater than large: 34px

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <NavBar siteTitle={data.site.siteMetadata.title} />
          <Page id="page-wrap">
            <Main>{children}</Main>
          </Page>
          <SocialIcons />
          <ChatIcon />
        </>
      )}
    />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Page = styled.div`
  background-color: ${p => p.theme.colors.primary};
`

const Main = styled.main`
  grid-area: main;
  display: flex;
  align-items: center;
  justify-content: center;
`
