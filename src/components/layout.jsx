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
import { StaticQuery, graphql, Link } from 'gatsby'
import theme from '../theme'

import NavBar from './nav-bar'
import './layout.css'
import logo from '../assets/logo-small.svg'

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
          <Link to="/">
            <Logo>
              <img src={logo} alt="Humancrafted logo" />
            </Logo>
          </Link>
          <NavBar siteTitle={data.site.siteMetadata.title} />
          <Page>
            <Main>{children}</Main>
            {/* <footer> */}
            {/*  © {new Date().getFullYear()}, Built with */}
            {/*  {` `} */}
            {/*  <a href="https://www.gatsbyjs.org">Gatsby</a> */}
            {/* </footer> */}
          </Page>
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

const Logo = styled.div`
  width: 22px;
  height: 90px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding-bottom: 3px;
  img {
    height: 22px;
    width: 22px;
    position: fixed;
    z-index: 1000;
    padding: 0;
    margin: 0;
  }
`

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`
