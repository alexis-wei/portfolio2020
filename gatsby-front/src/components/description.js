import React from "react"
import PropTypes from "prop-types"
import Grid from '@material-ui/core/Grid';

const Description = ({ title, caption, clouds}) => (
    <Grid container spacing={3} direction="row" justify="center" alignItems="center" >
        <Grid item xs={12} md={6} style={{minWidth: "280px"}}>
        <h1>{title}</h1>
        <h6 style={{width: "80%"}}>{caption}
        </h6>

        </Grid>
        <Grid item xs={12} md={6}>
            <img src={clouds} alt="clouds"/>
        </Grid>
    </Grid>


)


Description.propTypes = {
    title: PropTypes.string,
}
Description.defaultProps = {
    title: ``,
}
export default Description