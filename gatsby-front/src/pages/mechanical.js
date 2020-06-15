import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from '@material-ui/core/Grid';
import Cloud from "../images/pink-clouds.svg"
import Description from "../components/description"



const myTitle = "MECHANICAL ENGINEERING"
const myCaption = "Mechanical Engineering allows me to use creativity to solve real life problems, letting my imagination truly come alive. "

class Mechanical extends React.Component {
    constructor() {
      super()   
      this.state = {}
    }
  
  
    render() {
      return(
        <Layout headerColor={'#A26C6C'}>
            <SEO title="Mechanical"/>
            <div style={{color: '#A26C6C'}}>
                <Description title={myTitle} caption={myCaption} clouds={Cloud}/>


            </div>
            
        </Layout>
    )}
}

export default Mechanical