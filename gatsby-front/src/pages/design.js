import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"



class Design extends React.Component {
    constructor() {
      super()
      this.state = {}
    }
  
  
    render() {
      return(
        <Layout>
            <SEO title="Design"/>
            <h1>Art + Design</h1>
        </Layout>
    )}
}

export default Design