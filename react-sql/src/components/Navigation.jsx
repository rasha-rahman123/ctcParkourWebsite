import React from "react";
import { Link, withRouter } from "react-router-dom";
import {Row } from 'react-bootstrap';
import '../App.css';
import logo from '../CTC.png';
function Navigation(props) {
  return (
    <div className="navigation">
      <Row>
            <img src={logo} alt="Logo" width="283" height="100"></img>
            </Row>
            <Row>
      <nav class="navbar navbar-expand-sm navbar-dark">
        <div class="container">
          
          {/* <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button> */}
          
            <ul class="navbar-nav ml-auto">
              <li style={{color: "#ffd938"}}
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  LATEST EXPERIMENT
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/scoreboard" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/scoreboard">
                  SCORES
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/contact">
                 DM US
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                 PARTICIPATE
                </Link>
              </li>
            </ul>
   
        </div>
      </nav>
      </Row>
    </div>
  );
}

export default withRouter(Navigation);  