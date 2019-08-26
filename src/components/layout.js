/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';

import "./layout.css"

const Main = styled.main`
  padding: 60px 20px;
  display: grid;
  height: 100vh;
  grid-template-rows: auto 250px;
  max-width: 1200px;
  margin: auto;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return <Main>{children}</Main>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
