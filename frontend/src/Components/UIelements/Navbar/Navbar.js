import React, { Component } from "react";
import classes from "./Navbar.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import userIcon from "../../../assets/alt.png";
import logo from "../../../assets/logo.png";

class NavBar extends Component {
  logoutHandler = () => {
    localStorage.clear();

    window.location.href = "/";
  };

  render() {
    let token = localStorage.getItem("token");
    let Auth = false;
    if (token != null) {
      if (token !== "undefined") {
        Auth = true;
      }
    }

    let path;
    if (localStorage.getItem("userType") === "employer") {
      path = "/employer";
    } else {
      path = "/";
    }

    //console.log(typeof token);
    if (Auth) {
      return (
        <Navbar
          collapseOnSelect
          expand="md"
          bg="white"
          sticky="top"
          className={classes.Navbar}
        >
          <Navbar.Brand>
            <a href={path}>
              <img src={logo} alt="" className={classes.logo} />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Link
                to={"/" + localStorage.getItem("userType")}
                style={{
                  margin: "1rem",
                  marginTop: "1.4rem",
                }}
              >
                <img src={userIcon} alt="" />
              </Link>
              <Link className={classes.Navlink} onClick={this.logoutHandler}>
                Logout
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    } else {
      return (
        <Navbar
          collapseOnSelect
          expand="md"
          bg="white"
          sticky="top"
          className={classes.Navbar}
        >
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt="" className={classes.logo} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <NavDropdown
                title={<span className={classes.login}>Login</span>}
                id="collasible-nav-dropdown"
                className={classes.Dropdown}
              >
                <NavDropdown.Item>
                  <Link to="/studentlogin">As a student</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/employerlogin">As an employer</Link>
                </NavDropdown.Item>
              </NavDropdown>

              <Link to="/signup" className={classes.Navlink}>
                Signup
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
  }
}

export default NavBar;
