import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Resume from "../files/Alexis_Wei_Resume.pdf"
import Alexis from "../images/alexis.jpg"
import Grid from '@material-ui/core/Grid';

class About extends React.Component {
    constructor() {
      super()
      this.state = {}
    }
  
  
    render() {
      return(
        <Layout headerColor={'#707070'} resume={Resume}>
            <SEO title="About"/>
            <Grid container spacing={10} direction="row" justify="center" alignItems="center" style={{color: '#707070'}}>
                <Grid item xs={12} md={5}>
                    <img src={Alexis} alt="" />
                </Grid>
                <Grid item xs={12} md={7}>
                <h1>ABOUT ME</h1>
                <h6>I am going into my third year of Mechanical Engineering and EECS at UC Berkeley.
                    I love working with parts to build systems that can come to life, watching responsive 
                    movement created through just interacting with a few lines of code. 
                    On the side, I also dabble a little bit in illustration, photography and video editing, 
                    giving me platforms to always express how I am feeling. I hope to always keep life moving, 
                    making every single day, the best day that it can be.
                </h6>
                    <b/>
                <h6>
                    This portfolio took many iterations and long time to come together because I didn't 
                    know how to accurately portray myself.
                    I'm not simply a one dimensional kind of a person and I didn't want to showcase only 
                    one side of myself when I know that I have interests and skills in so much more.
                </h6>
                    <b/>
                <h6>
                    I am big dreamer and hope to always make products that everyone will love. 
                    I know that working in a position that allows equal exposure to all three fields that I love
                    is near impossible, but I know that I will be just as excited to end up in any of these.
                    Please click around and explore a little bit of what I’ve done!
                </h6>
                </Grid >
            </Grid>
        </Layout>
    )}
}

export default About