/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"

import "./layout.scss"

const Layout = ({ children, headerColor }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  
  return (
    
      // <Header siteTitle={data.site.siteMetadata.title} /> 
    <>
      <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} mainColor={headerColor} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `70%`,
          height: `100%`,
          padding: `0 1.0875rem 1.45rem`,
          backgroundColor: `#FFFFFF`,
        }}
      >
        <main>{children}</main>
        <footer style={{paddingBottom: "200px"}}>

        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
