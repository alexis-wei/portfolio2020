import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cloud from "../images/blue-clouds.svg"
import Description from "../components/description"
import Resume from "../files/Alexis_Wei_CSResume.pdf";
import Portfolio from "../files/Portfolio-2019.pdf";


const myTitle = "COMPUTER SCIENCE"
const myCaption = "Software is fast paced and there is always something to learn. I'm constantly amazed by how much is possible with just a couple lines of code"

class Cs extends React.Component {
    constructor() {
      super()
      this.state = {}
    }
  
  
    render() {
      return(
        <Layout headerColor={'#547398'} resume={Resume} portfolio={Portfolio}>
            <SEO title="CS"/>
            <div style={{color: '#547398'}}>
                <Description title={myTitle} caption={myCaption} clouds={Cloud}/>
            </div>
        </Layout>
    )}
}

export default Cs