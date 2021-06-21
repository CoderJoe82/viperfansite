import React, { Component } from "react";
import "./menu.css";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div
        id="mainMenu"
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent, rgb(0, 0, 0)), url(${
            process.env.PUBLIC_URL + "/snake.menu.jpg"
          })`,
          backgroundSize: "100% auto",
        }}
      >
        <Link
          className="navSpots"
          to="/yourBartender"
          style={{ textDecoration: "none" }}
        >
          <button className="navButtons">
            Your <br /> Bartender
          </button>
        </Link>
        <Link
          className="navSpots"
          to="/socialMedia"
          style={{ textDecoration: "none" }}
        >
          <button className="navButtons">
            Social <br /> Media
          </button>
        </Link>
        <Link
          className="navSpots"
          to="/scalePartners"
          style={{ textDecoration: "none" }}
        >
          <button className="navButtons">
            Scale <br /> Partners
          </button>
        </Link>
        <Link
          className="navSpots"
          to="/scalePatrons"
          style={{ textDecoration: "none" }}
        >
          <button className="navButtons">
            Scale <br /> Patrons
          </button>
        </Link>
        <Link className="navSpots" to="/" style={{ textDecoration: "none" }}>
          <button className="navButtons">
            Back <br /> Home
          </button>
        </Link>
      </div>
    );
  }
}

export default Menu;
