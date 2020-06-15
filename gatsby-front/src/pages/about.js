import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"



class About extends React.Component {
    constructor() {
      super()
      this.state = {}
    }
  
  
    render() {
      return(
        <Layout>
            <SEO title="About"/>
            <h1>About</h1>
        </Layout>
    )}
}

export default About