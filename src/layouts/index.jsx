/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import styled, { ThemeProvider } from 'styled-components'
// import 'normalize.css/normalize.css'
import media from 'styled-media-query'
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

const Index = ({ children, location }) => {
  const blackFooter = location.pathname === '/'
  const showChat = location.pathname !== '/contact'
  return (
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
              <Main>{children}</Main>
            </Transition>
            <SocialIcons />
            {showChat && <ChatIcon />}
            <Footer black={blackFooter} />
          </>
        )}
      />
    </ThemeProvider>
  )
}

Index.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Index

const Main = styled.main`
  transition: 1s ease-in-out;
  position: relative;
  min-height: calc(100vh - 30px);
  padding-top: 60px;
  ${media.greaterThan('medium')`
    margin-top: -90px;
    padding-top: 90px;
  `};
`
