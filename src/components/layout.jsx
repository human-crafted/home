/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { ThemeProvider } from 'styled-components'
// import 'normalize.css/normalize.css'
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import theme from '../theme'
import SocialIcons from './social-icons'
import ChatIcon from './chat-icon'

import NavBar from './nav-bar'
import './layout.css'
import Footer from './footer'

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
          <main>{children}</main>
          <SocialIcons />
          <ChatIcon />
          <Footer />
        </>
      )}
    />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
