import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle, menuLinks, mainColor }) => (
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
        <div style={{display: "flex", alignItems: "center"}}>
          <nav style={{height: "100%", margin: 0}} >
            <ul style={{ display: "flex", flex: 1, justifyItems: "space-between",
          alignItems: "center", height: "100%", width: "100%", margin: 0 }}>
              {menuLinks.map(link => (
                <li key={link.name}
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
          </nav>
        </div>
      </div>
    </div>
  </header>
)
Header.propTypes = {
  siteTitle: PropTypes.string,
}
Header.defaultProps = {
  siteTitle: ``,
}
export default Header