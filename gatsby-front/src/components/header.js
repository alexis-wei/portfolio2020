import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';
import InstagramIcon from '@material-ui/icons/Instagram';
import resume from "../files/Alexis_Wei_Resume.pdf";


const useStyles = makeStyles((theme) => ({
  links: {
    color: "#000000",
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: '100%',
  },
}));


function Header({ siteTitle, menuLinks, mainColor}){
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List style={{display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
      {menuLinks.map(link => (
        
        <Link style={{ color: mainColor, textDecoration: "none", width: "100%"}}  to={link.link}>
          <ListItem button key={link.name} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <p className="header-title" style={{margin: "20px"}}>{link.name}</p>
          </ListItem>
        </Link>
      ))}
      </List>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", color: mainColor}}>
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
    </div>
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  

  return(
    <header style={{ background: "white", marginBottom: "1rem",}}>
    <div style={{ background: "white",marginBottom: "1rem",}}>
      <div
        style={{
          margin: "0 auto",
          maxWidth: "80%",
          padding: "1rem 1rem",
          display: "flex",
          justifyItems: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ margin: 0, flex: 1 }}>
          <Link to="/"
            style={{
              color: mainColor,
              textDecoration: "none",
            }}
          >
            {siteTitle}
          </Link>
        </h2>
        
        <div  style={{display: "flex", alignItems: "center"}}>
          <nav  style={{height: "100%", margin: 0}} >
          <Hidden smDown>
            <ul style={{ display: "flex", flex: 1, justifyItems: "space-between",
          alignItems: "center", height: "100%", width: "100%", margin: 0 }}>
              {menuLinks.map(link => (
                <li  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                    margin: 0 
                  }}
                >
                  <Link style={{ color: mainColor, textDecoration: "none" }} to={link.link}>
                    <p className="header-title">{link.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
            variant="temporary"
            anchor={'right'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
          </Hidden>
          </nav>
        </div>
      </div>
    </div>
  </header>
  )
}
 

Header.propTypes = {
  siteTitle: PropTypes.string,
}
Header.defaultProps = {
  siteTitle: ``,
}
export default Header