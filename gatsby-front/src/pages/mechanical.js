import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from '@material-ui/core/Grid';
import Cloud from "../images/pink-clouds.svg"
import FormulaRenders from "../images/Formula-renders.svg"
import Description from "../components/description"
import Resume from "../files/Alexis_Wei_MechResume.pdf";



const myTitle = "MECHANICAL ENGINEERING"
const myCaption = "Mechanical Engineering allows me to use creativity to solve real life problems, letting my imagination truly come alive. "

class Mechanical extends React.Component {
    constructor() {
      super()   
      this.state = {}
    }
  
  
    render() {
      return(
        <Layout headerColor={'#A26C6C'} resume={Resume}>
            <SEO title="Mechanical"/>
            <div style={{color: '#A26C6C'}}>
                <Description title={myTitle} caption={myCaption} clouds={Cloud}/>
                <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: "1.5rem"}}>
                  <Grid item xs={12} md={6} style={{backgroundColor: "#FFF4F8", padding:"3.5rem"}}>
                    <h2>FORMULA ELECTRIC @ BERKELEY</h2>
                    <h3>CHASSIS AND ERGONOMICS ENGINEER</h3>
                    <h5>A. ERGONOMICS RIG</h5>
                    <p>A successfully functioning vehicle cannot happen without planning and testing. 
                      As a part of the ergonomics team, I helped build this adjustable structure out 
                      of wooden planks and 80/20 in order to find constraints for the rest of the team.</p>
                    <h5>B. STEERING WHEEL</h5>
                    <p>The steering wheel is the most important part of the car for the driver and needs 
                      careful consideration on its material and controls to allow for the best possible 
                      driver performance during the race. </p>
                    <a href="https://docs.google.com/document/d/1hT255c232g-Sd63cWnTpHPrPGxEpHt-v74dBgMEXVVw/edit?usp=sharing"  rel="noopener noreferrer"  target="_blank"> Read my design doc</a>
                    <h5>C. ACCUMULATOR COOLING SYSTEM</h5>
                    <p>As the accumulator carries the batteries that power the entire vehicle, 
                      cooling becomes essential in preventing system failure. Through thermal 
                      analyze and mass flow rate calculations, I am coming up with the most space efficient and 
                      cost effective solution for accumulator cooling. </p><b/>
                      
                    <p>Work in progress…</p>
                    <a href="https://docs.google.com/document/d/1rOczfLDH35WAL0W1fC9vxg73qxAzBi9Eyn2aR8FdQV0/edit?usp=sharing"  rel="noopener noreferrer" target="_blank"> Follow my design process!</a>
                  </Grid>
                  <Grid item xs={12} md={6}>
                  <img src={FormulaRenders} alt="Formula Renders"/>
                  </Grid>
                </Grid>
            </div>
            
        </Layout>
    )}
}

export default Mechanical