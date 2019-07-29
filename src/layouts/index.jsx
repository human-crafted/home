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
import SocialIcons from '../components/social-icons'
import ChatIcon from '../components/chat-icon'

import NavBar from '../components/nav-bar'
import './layout.css'
import Footer from '../components/footer'
import Transition from '../components/transistion'

const Index = ({ children, location }) => (
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
          <Transition location={location}>
            <main>{children}</main>
          </Transition>
          <SocialIcons />
          <ChatIcon />
          <Footer />
        </>
      )}
    />
  </ThemeProvider>
)

Index.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Index
