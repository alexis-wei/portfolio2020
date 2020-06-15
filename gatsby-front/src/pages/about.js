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
        <Layout headerColor={'#707070'}>
            <SEO title="About"/>
            <div style={{color: '#707070'}}>
                <h1>ABOUT ME</h1>
                <h6>I am going into my third year of Mechanical Engineering and EECS student at UC Berkeley.
                    I love bringing parts and machines to life through connectors and code. On the side, 
                    I also dabble a little bit in illustration and photography. 
                    I am big dreamer and hope to always make products that everyone will love. 
                    Let’s explore a little bit of what I’ve done!
                </h6>
            </div>
        </Layout>
    )}
}

export default About