import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cloud from "../images/blue-clouds.svg"
import Description from "../components/description"
import Resume from "../files/Alexis_Wei_CSResume.pdf";



const myTitle = "COMPUTER SCIENCE"
const myCaption = "Computer Science was never something that I grew up thinking I would enjoy doing. From the endless hours in front of a screen, to the repetitve typing motion, it lacked what I understood as excitement. But ever since searching through Stack Overflow, trying to make a minesweeper game back in 10th grade, I finally understood why CS was so amazing, and the world of adventures that all these languages can take me. I guess you can say that I got blown away."


class Cs extends React.Component {
    constructor() {
      super()
      this.state = {}
    }
  
  
    render() {
      return(
        <Layout headerColor={'#547398'} resume={Resume}>
            <SEO title="CS"/>
            <div style={{color: '#547398'}}>
                <Description title={myTitle} caption={myCaption} clouds={Cloud}/>
            </div>
        </Layout>
    )}
}

export default Cs