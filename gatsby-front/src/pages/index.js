import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { withStyles } from '@material-ui/styles';

import Button from '@material-ui/core/Button';
import { Link } from "gatsby"


const styles = theme => ({
  root: {
    borderRadius: 10,
    margin: 10, 
    width: 120,
    borderColor: '#707070',
    
    fontSize: '0.8rem'
  },
  label: {
    textTransform: 'capitalize',
  },
  pinkButton: {
    color: '#707070',
    '&:hover': {
      borderColor: '#A26C6C',
      color: '#A26C6C',
      backgroundColor: '#FFF4F8'
    }
  },
  blueButton: {
    color: '#707070',
    '&:hover': {
      borderColor: '#547398',
      color: '#547398',
      backgroundColor: '#E3F4FF'
    }
  },
  yellowButton: {
    color: '#707070',
    '&:hover': {
      borderColor: '#D1A922',
      color: '#D1A922',
      backgroundColor: '#FFFCE8'
    }
  }
});


class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = {}
  }


  render() {
    const { classes } = this.props;
    return(
      <Layout >
        <SEO title="Hello" />
        <div className="center">
        <div>
          <h1>ALEXIS WEI</h1>
          <h6 className="light">Robotics Engineer and Designer</h6>
        </div>
        <div>
          <Button className={classes.pinkButton } variant="outlined" classes={{root: classes.root, label: classes.label }} color="primary" size="small" > 
            <Link to="/mechanical/" className={classes.pinkButton } style={{textDecoration: 'none'}}>Mechanical</Link></Button>
          <Button className={classes.blueButton } classes={{root: classes.root, label: classes.label }} variant="outlined" color="primary" size="small" >
          <Link to="/cs/" className={classes.blueButton } style={{textDecoration: 'none'}}>Software</Link></Button>
          <Button className={classes.yellowButton }classes={{root: classes.root, label: classes.label }} variant="outlined" color="primary" size="small" >
          <Link to="/design/" className={classes.yellowButton } style={{textDecoration: 'none'}}>Design</Link></Button>
        </div>
        </div>


      
        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </Layout>
    )
  }
  
}



export default withStyles(styles)(IndexPage)
