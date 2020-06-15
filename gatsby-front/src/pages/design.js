import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cloud from "../images/yellow-clouds.svg"
import Description from "../components/description"



const myTitle = "ART + DESIGN"
const myCaption = "Ever since the age of 3, colors and visuals have been a part of my life. No matter how invested I get in the world of engineering, a part of me always reach back, yearning to design."


class Design extends React.Component {
    constructor() {
      super()
      this.state = {}
    }
  
  
    render() {
      return(
        <Layout headerColor={'#D1A922'}>
            <SEO title="Design"/>
            <div style={{color: '#D1A922'}}>
                <Description title={myTitle} caption={myCaption} clouds={Cloud}/>
            </div>
        </Layout>
    )}
}

export default Design