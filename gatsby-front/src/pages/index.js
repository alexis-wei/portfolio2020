import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Wave1 from "../images/wave1.svg"
import Wave2 from "../images/wave2.svg"
import Cloud1 from "../images/cloud1.svg"
import Cloud2 from "../images/cloud2.svg"
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
          <Grid item xs={0} sm={2}/>
          <Grid item xs={12} sm={8}>

            <div style={{paddingTop: "140px", paddingBottom: "500px", position: "relative", justifyContent: "center",alignItems: "center"}}>
              <img src={this.state.img} onMouseOver={() => {this.setState({img: Wave2})}} onMouseOut={() => {this.setState({img: Wave1})}} 
              onFocus={ () => void 0 } onBlur={ () => void 0 } alt="Alexis Waving" className="center" style={{width: "500px", margin: "auto"}}/>
              <img src={Cloud1} id="cloud-l" alt="Pink Cloud 1" style={{height: "200px", paddingRight: "200px", top:"100px", position:"absolute" }}/>
              <img src={Cloud2} id="cloud-r" alt="Pink Cloud 2" style={{height: "400px", paddingLeft: "200px", top:"280px", position:"absolute" }}/>
            </div>
          </Grid>
          <Grid item xs={0} sm={2}/>
        </Grid>
        
        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </Layout>
    )
  }
  
}

export default IndexPage
