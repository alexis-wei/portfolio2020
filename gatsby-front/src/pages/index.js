import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Wave from "../images/wave.svg"
import Grid from '@material-ui/core/Grid'

const IndexPage = () => (
  <Layout>
    <SEO title="Hi There" />

    <Grid container spacing={3}>
      <Grid item xs={0} sm={2}/>
      <Grid item xs={12} sm={8}>
        <img src={Wave} alt="Alexis Waving" class="center" style={{width: "500px",paddingTop: "220px", paddingBottom: "100px"}}/>
        <h4>I am an engineer, designer, innovator</h4>
      </Grid>
      <Grid item xs={0} sm={2}/>
    </Grid>
    
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
