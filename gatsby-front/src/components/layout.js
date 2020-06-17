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
import Portfolio from "../files/Portfolio-2019.pdf"

import "./layout.scss"

const Layout = ({ children, headerColor, resume }) => {
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
        <main>{children}
        <div style={{paddingBottom: "60px", backgroundColor: "#FFFFFF", position: "relative", width: "100%"}}>
          <div className="center" style={{paddingTop: "100px", color: headerColor}}>
            <a className="footer-links"  href={Portfolio}  rel="noopener noreferrer" target="_blank">Portfolio</a>
            <a className="footer-links"  href={resume}  rel="noopener noreferrer" target="_blank">Resume</a>
            <a className="footer-links"  href="https://www.linkedin.com/in/alexis-wei"  rel="noopener noreferrer" target="_blank">LinkedIn</a>
            <a className="footer-links"  href="https://github.com/alexis-wei"  rel="noopener noreferrer" target="_blank">GitHub</a>
            <a className="footer-links"  href="https://www.instagram.com/awei.studio/" rel="noopener noreferrer" target="_blank"> Instagram</a>
          </div>
        </div>
        </main>
        
      <footer>
      </footer>
      </div>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
