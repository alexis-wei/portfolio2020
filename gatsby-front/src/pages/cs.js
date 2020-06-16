import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cloud from "../images/blue-clouds.svg"
import Description from "../components/description"



const myTitle = "COMPUTER SCIENCE"
const myCaption = "Computer Science was once scary and daunting. But after a series of whys, it taught me how to understand the world of technology through the power of languages."


class Cs extends React.Component {
    constructor() {
      super()
      this.state = {}
    }
  
  
    render() {
      return(
        <Layout headerColor={'#547398'}>
            <SEO title="CS"/>
            <div style={{color: '#547398'}}>
                <Description title={myTitle} caption={myCaption} clouds={Cloud}/>
            </div>
        </Layout>
    )}
}

export default Cs