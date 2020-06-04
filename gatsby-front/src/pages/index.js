import React from "react"
import LinkIcon from '@material-ui/icons/Link';
import Layout from "../components/layout"
import Projects from "../components/projects"
import SEO from "../components/seo"
import IconButton from '@material-ui/core/IconButton';
import Wave1 from "../images/wave1.svg"
import Wave2 from "../images/wave2.svg"
import Cloud1 from "../images/cloud1.svg"
import Cloud2 from "../images/cloud2.svg"
import resume from "../files/Alexis_Wei_Resume.pdf"
import Grid from '@material-ui/core/Grid'


class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = {img: Wave1}
  }


  render() {
    return(
      <Layout>
        <SEO title="Alexis Wei" />

        
        <Grid container spacing={3}>
          <Grid item xs={1} sm={2}/>
          <Grid item xs={11} sm={8}>
            
            <div style={{paddingTop: "16vh", paddingBottom: "6vh", position: "relative", justifyContent: "center",alignItems: "center"}}>
              <img src={this.state.img} onMouseOver={() => {this.setState({img: Wave2})}} onMouseOut={() => {this.setState({img: Wave1})}} 
              onFocus={ () => void 0 } onBlur={ () => void 0 } alt="Alexis Waving" className="center" style={{width: "500px", margin: "auto"}}/>
              <img src={Cloud1} id="cloud-l" alt="Pink Cloud 1" style={{height: "200px", paddingRight: "11vw", top:"100px", position:"absolute"}}/>
              <img src={Cloud2} id="cloud-r" alt="Pink Cloud 2" style={{height: "400px", paddingLeft: "10vw", top:"280px", position:"absolute"}}/>

            </div>
            <Grid container spacing={3}>
              <Grid item xs={1}/>
              <Grid item xs={10} sm={7}>
                <h4 className="medium" style={{lineHeight: "24px"}}> I am current a third year <b>mechanical engineering</b> and <b> eecs</b> student at UC Berkeley.
                I love bringing parts and machines to life through connectors and code. On the side, I also dabble a little bit in illustration and photography.
                I am big dreamer and hope to always make products that everyone will love. <br/><br/> Let's explore a little bit of what I've done!</h4><br/><br/>
              </Grid>
              <Grid item xs={1} sm={4}/>
            </Grid>
            <Projects/>
            
          </Grid>
          <Grid item xs={1} sm={2}>
          <Grid container direction="row" justify="flex-end" >

              
              <Grid item xs={0} sm={4} md={8}/>

              <Grid item xs={10} sm={6} md={2}>
                <IconButton id="main-color" aria-label="link" component="span" onClick={() => window.open(resume)}>
                <LinkIcon />
              </IconButton></Grid>
              <Grid item xs={2} />
            </Grid>
            </Grid>
        </Grid>
        
        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </Layout>
    )
  }
  
}

export default IndexPage
