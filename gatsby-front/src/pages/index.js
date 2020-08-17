import React from "react"
import SEO from "../components/seo"
import { withStyles } from '@material-ui/styles';

import Button from '@material-ui/core/Button';
import { Link } from "gatsby"
import "../components/css/layout.scss"


const styles = theme => ({
  root: {
    borderRadius: 10,
    margin: 10,
    paddingLeft: '10px', 
    paddingRight: '10px',
    width: 160,
    borderColor: '#707070',
    fontSize: '0.75rem'
  },
  label: {
    textTransform: 'capitalize',
  },
  pinkButton: {
    color: '#707070',
    fontWeight: "400",
    paddingBottom: "0.3rem",
    '&:hover': {
      borderColor: '#A26C6C',
      color: '#A26C6C',
      backgroundColor: '#FFF4F8'
    }
  },
  blueButton: {
    color: '#707070',
    fontWeight: "400",
    paddingBottom: "0.3rem",
    '&:hover': {
      borderColor: '#547398',
      color: '#547398',
      backgroundColor: '#E3F4FF'
    }
  },
  yellowButton: {
    color: '#707070',
    fontWeight: "400",
    paddingBottom: "0.3rem",
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
      <div style={{
        margin: `0 auto`,
        maxWidth: `100%`,
        height: `100%`,
        padding: `0 1.0875rem 1.45rem`,
        backgroundColor: `#FFFFFF`,
      }}>
        <main>
        <SEO title="Hello" />
        <div className="center">
        <div>
          <h1 style={{fontSize: "3rem"}}>ALEXIS WEI</h1>
          <h6 className="light" style={{fontSize: "1.5rem"}}>Robotics Engineer and Designer</h6>
        </div>
        <div>
          <Button className={classes.pinkButton } variant="outlined" classes={{root: classes.root, label: classes.label }} color="primary" size="small" > 
            <Link to="/mechanical/" className={classes.pinkButton } style={{textDecoration: 'none', margin:"0", padding: "0"}}>Mechanical</Link></Button>
          <Button className={classes.blueButton } classes={{root: classes.root, label: classes.label }} variant="outlined" color="primary" size="small" >
          <Link to="/cs/" className={classes.blueButton } style={{textDecoration: 'none', margin:"0", padding: "0"}}>Software</Link></Button>
          <Button className={classes.yellowButton }classes={{root: classes.root, label: classes.label }} variant="outlined" color="primary" size="small" >
          <Link to="/design/" className={classes.yellowButton } style={{textDecoration: 'none', margin:"0", padding: "0"}}>Design</Link></Button>
        </div>
        </div>
        </main>


      
        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </div>
    )
  }
  
}



export default withStyles(styles)(IndexPage)
