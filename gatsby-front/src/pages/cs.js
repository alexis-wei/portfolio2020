import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Grid from '@material-ui/core/Grid';
import Cloud from "../images/blue-clouds.svg";
import Description from "../components/description";
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
                <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: "1.2rem"}}>
                  <Grid item xs={12} md={6} lg={7} style={{backgroundColor: "#E3F4FF", padding:"3.5rem", borderRadius:"16px"}}>
                    <h2>DINE HERE</h2>
                    <h3>CO-FOUNDER</h3>
                    <p>Over the last couple of months, I have been working on DineHere, a platform that currently helps to bring contactless menus to local restaurants!</p>
                    <p>We hope for DineHere to eventually be a platform where YOU can find the best food to around you at any time.</p>
                    <p>At DineHere, I also code a little and have been working on the entire stack of the site. From MongoDB, to KOA, to the frontend in React.js and Redux. This has been an absolutely amazing experience and am excited to keep going!</p>
                    <a href="https://dinehere.me"  rel="noopener noreferrer"  target="_blank">Live Right NOW :)</a>
                  </Grid>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: "1.2rem"}}>
                  <Grid item xs={12} md={6} lg={7} style={{backgroundColor: "#F4F4F4", padding:"3.5rem", borderRadius:"16px"}}>
                    <h2>POMP BEAUTY</h2>
                    <h3>FRONTEND DEVELPER</h3>
                    <p>Over the summer, not only did I get to work on the UI/UX design of Pomp, I also got to work with the engineering team
                      to implement my design using React.js
                    </p>
                    <a href="https://www.pompbeauty.com/survey"  rel="noopener noreferrer"  target="_blank">Check it out!</a>
                  </Grid>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: "1.2rem"}}>
                  <Grid item xs={12} md={6} lg={7} style={{backgroundColor: "#E3F4FF", padding:"3.5rem", borderRadius:"16px"}}>
                    <h2>FORMULA ELECTRIC @ BERKELEY</h2>
                    <h3>FIRMWARE DEVELPER</h3>
                    <p>Recently, I've switched from the Chassis team to the EECS team in order to help making this amazing vehicle move</p>
                    <p>Now I am working with STM32CubeIDE and C++ and definitely learning a ton!</p>
                      
                  </Grid>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: "1.2rem"}}>
                  <Grid item xs={12} md={6} lg={7} style={{backgroundColor: "#F4F4F4", padding:"3.5rem", borderRadius:"16px"}}>
                    <h2>OM NOM</h2>
                    <h3>HACK: NOW - PROJECT</h3>
                    <p>At the start of COVID-19, a couple of friends and I wanted to created a social media platform for people who simply love food.
                      There are so so many out there, but not a single central place for everyone to gather together, from people who love to cook, who love to eat,
                      and every restaurants that have amazing dishes that they wish to share with the world. 
                    </p>
                    <p>In just 36 hours, we created a demo project in React.js and MongoDB that shows of a bit of what we hope to see come alive in the future.
                    </p>
                    <a href="https://www.youtube.com/watch?v=wV-2sYjasDs"  rel="noopener noreferrer"  target="_blank">Here's a short video of what we created</a>
                  </Grid>
                </Grid>
            </div>

        </Layout>
    )}
}

export default Cs