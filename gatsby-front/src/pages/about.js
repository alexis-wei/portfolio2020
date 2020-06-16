import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';
import InstagramIcon from '@material-ui/icons/Instagram';
import resume from "../files/Alexis_Wei_Resume.pdf"
import IconButton from '@material-ui/core/IconButton';


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
                <h6>I am going into my third year of Mechanical Engineering and EECS at UC Berkeley.
                    I love bringing parts and machines to life through connectors and code. On the side, 
                    I also dabble a little bit in illustration and photography. 
                    I am big dreamer and hope to always make products that everyone will love. 
                    Let’s explore a little bit of what I’ve done!
                </h6>
                <h2 style={{marginBottom: "10px"}}>LINKS</h2>
                <IconButton href={resume} target="_blank" > 
                    <NoteOutlinedIcon/>
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/alexis-wei"  target="_blank"> 
                    <LinkedInIcon/>
                </IconButton>
                <IconButton href="https://github.com/alexis-wei"  target="_blank"> 
                    <GitHubIcon/>
                </IconButton>
                <IconButton href="https://www.instagram.com/awei.studio/" target="_blank" > 
                    <InstagramIcon/>
                </IconButton>
            </div>
        </Layout>
    )}
}

export default About