import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import ReactDOM from 'react-dom';

const nav = ({ themeColor }) => {
  return(
    <div>
      <h1 >ALEXIS WEI</h1>
      <div>
        <Link>Mechanical</Link>
        <Link>Software</Link>
        <Link>Design</Link>
        <Link>About</Link>
      </div>
    </div>
  )
  
}

Header.propTypes = {
  themeColor: PropTypes.string,
}

Header.defaultProps = {
  themeColor: `#707070`,
}

ReactDOM.render(
  nav,
  document.getElementById('root')
);
