import React, { Component } from "react";
import "./menu.css";
import { Link } from "react-router-dom";
import $ from "jquery";

class Menu extends Component {
  handleShowImageAndButton = () => {
    $("#tavernButton").fadeOut(100);
    $("#staffImage").fadeOut(100);
    $("#hostText").fadeOut(100);
    $("#securityText").fadeOut(100);
    setTimeout(() => {
      $("#staffButton").fadeIn();
      $("#tavernImage").fadeIn();
    });
  };

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
          <img
            src={process.env.PUBLIC_URL + "/flame.image.png"}
            id="leftFlame"
            alt="flame1"
          />
          <button className="navButtons">
            Your <br /> Bartender
          </button>
        </Link>
        <Link
          className="navSpots"
          to="/socialMedia"
          style={{ textDecoration: "none" }}
        >
          <img
            src={process.env.PUBLIC_URL + "/flame.image.png"}
            id="midLeftFlame"
            alt="flame2"
          />
          <button className="navButtons">
            Social <br /> Media
          </button>
        </Link>
        <Link
          className="navSpots"
          to="/scalePartners"
          style={{ textDecoration: "none" }}
        >
          <img
            src={process.env.PUBLIC_URL + "/flame.image.png"}
            id="midRightFlame"
            alt="flame3"
          />

          <button className="navButtons">
            Scale <br /> Partners
          </button>
        </Link>
        <Link className="navSpots" to="/" style={{ textDecoration: "none" }}>
          <img
            src={process.env.PUBLIC_URL + "/flame.image.png"}
            id="rightFlame"
            alt="flame4"
          />

          <button
            className="navButtons"
            onClick={this.handleShowImageAndButton}
          >
            Back <br /> Home
          </button>
        </Link>
      </div>
    );
  }
}

export default Menu;
