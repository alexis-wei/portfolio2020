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
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';

import "./css/layout.scss"

const Layout = ({ children, headerColor, resume, portfolio }) => {
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
      <div className="page-spacing"
        style={{
          margin: `0 auto`,
          height: `100%`,
          padding: `0 1.0875rem 1.45rem`,
          backgroundColor: `#FFFFFF`,
        }}
      >
        <main>{children}
        <div style={{paddingBottom: "60px", marginTop: "80px", backgroundColor: "#FFFFFF", position: "relative", width: "100%"}}>
          <div className="center" style={{paddingTop: "100px", color: headerColor}}>
            <a className="footer-links"  href={portfolio}  rel="noopener noreferrer" target="_blank">PORTFOLIO</a>
            <a className="footer-links"  href={resume}  rel="noopener noreferrer" target="_blank">RESUME</a>
            <a className="footer-links"  href="https://www.linkedin.com/in/alexis-wei"  rel="noopener noreferrer" target="_blank">LINKEDIN</a>
            <a className="footer-links"  href="https://github.com/alexis-wei"  rel="noopener noreferrer" target="_blank">GITHUB</a>
            <a className="footer-links"  href="https://www.instagram.com/awei.studio/" rel="noopener noreferrer" target="_blank"> INSTAGRAM</a>
          </div>
          <div style={{display: "flex", direction: "row"}}>
          <p  style={{marginRight: "10px"}}>Built by Alexis Wei</p>
          <WbSunnyOutlinedIcon/>
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
