import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from '@material-ui/core/Button';



class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = {}
  }


  render() {
    return(
      <Layout >
        <SEO title="Alexis Wei" />
        <div className="center">
        <div>
          <h1>ALEXIS WEI</h1>
          <h6 className="light">Robotics Engineer and Designer</h6>
        </div>
        <div>
          <Button variant="outlined" color="primary"  style={{ borderRadius: 8, margin: 10 }}>Mechanical</Button>
          <Button variant="outlined" color="primary"  style={{ borderRadius: 8, margin: 10 }}>Software</Button>
          <Button variant="outlined" color="primary"  style={{ borderRadius: 8, margin: 10 }}>Design</Button>
        </div>
        </div>


      
        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </Layout>
    )
  }
  
}

export default IndexPage
