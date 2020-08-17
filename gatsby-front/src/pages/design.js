import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from '@material-ui/core/Grid';
import Cloud from "../images/yellow-clouds.svg"
import Description from "../components/description"
import Resume from "../files/Alexis_Wei_DesignResume.pdf";
import Portfolio from "../files/Design-Portfolio-2020.pdf";
import PompOrange from "../images/svg/pomp-orange.svg"
import Registration from "../images/Pomp-registration.png"


import "../components/css/design.scss"

const myTitle = "ART + DESIGN"
const myCaption = "Colors and visuals have always been a part of my life. No matter how invested I get in the world of engineering, a part of me always reach back, yearning to design."


class Design extends React.Component {
    constructor() {
      super()
      this.state = {}
    }
  
  
    render() {
      return(
        <Layout headerColor={'#D1A922'} resume={Resume} portfolio={Portfolio}>
            <SEO title="Design"/>
            <div style={{color: '#D1A922'}}>
                <Description title={myTitle} caption={myCaption} clouds={Cloud}/>
                <Grid container direction="row" justify="center" alignItems="center" spacing={8} style={{marginTop: "1.2rem"}}>
                  <Grid item xs={12} md={6} lg={7} style={{backgroundColor: "#FFFCE8", padding:"3.5rem", borderRadius:"16px"}}>
                    <h2>POMP BEAUTY</h2>
                    <h3>DESIGNER + FRONTEND ENGINEERING INTERN</h3>
                    <p>Pomp Beauty is a skin care service that provides users with curated products for their skin with the help online estheticians. </p>
                    <h5>A. UI/UX - CUSTOMER REGISTERATION EXPERIENCE</h5>
                    <p>After noticing a significant drop in the user drop rates seen from the start of the survey process, 
                      the survey, registration and welcome pages were redesigned to help customers better understand the pomp process.</p>
                    <a href="https://xd.adobe.com/view/3c40c443-abcb-4f73-4f66-813b376bd13f-4a71/"  rel="noopener noreferrer"  target="_blank"> Web & Mobile Wireframes</a>
                    <h5>B. GRAPHIC DESIGN + VIDEOS</h5>
                    <p>I also created weekly emails, social media posts and informative videos with cohesive theme and branding. </p>
                    <a href="https://xd.adobe.com/view/e56a6a0d-8689-49f7-47e9-606fc8a74b73-935b/"  rel="noopener noreferrer"  target="_blank"> Check out more of my works!</a>
                  </Grid>
                  <Grid item xs={12} md={6} lg={5}>
                  <img src={Registration} alt="Pomp Registration"/>
                  <img src={PompOrange} alt="Pomp Orange"/>
                  </Grid>
                
              </Grid>
            </div>
        </Layout>
    )}
}

export default Design