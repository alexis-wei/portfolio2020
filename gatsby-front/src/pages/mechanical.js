import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"



class Mechanical extends React.Component {
    constructor() {
      super()
      this.state = {}
    }
  
  
    render() {
      return(
        <Layout>
            <SEO title="Mechanical"/>
            <h1>Mechanical Engineering</h1>
        </Layout>
    )}
}

export default Mechanical