import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Wave from "../images/1.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img src={Wave} alt="Alexis Waving" class="center" style={{width: "500px",
  paddingTop: "220px", paddingBottom: "500px"}}/>
    
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
