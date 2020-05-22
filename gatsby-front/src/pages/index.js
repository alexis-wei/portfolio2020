import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Wave from "../images/wave.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img src={Wave} alt="Alexis Waving" class="center" style={{width: "500px",
  paddingTop: "220px", paddingBottom: "300px"}}/>
    <h1>I am an engineer, designer, innovator</h1>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
