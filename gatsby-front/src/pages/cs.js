import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"



class Cs extends React.Component {
    constructor() {
      super()
      this.state = {}
    }
  
  
    render() {
      return(
        <Layout>
            <SEO title="CS"/>
            <h1>Computer Science</h1>
        </Layout>
    )}
}

export default Cs