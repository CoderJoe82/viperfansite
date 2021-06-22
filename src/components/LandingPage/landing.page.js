import React, { Component } from "react";
import "./landing.page.css";
import Menu from "../Menu/menu";
import Logo from "../Logo/logo";
import $ from "jquery";

class LandingPage extends Component {
  handleHideImageAndButton = () => {
    $("#staffButton").fadeOut(2000);
    $("#tavernImage").fadeOut(2000);
    setTimeout(() => {
      $("#tavernButton").fadeIn(2000);
      $("#staffImage").fadeIn(2000);
      $("#hostText").fadeIn(2000);
      $("#securityText").fadeIn(2000)
    }, 2000);
  }; 

  handleShowImageAndButton = () => {
    $("#tavernButton").fadeOut(2000);
      $("#staffImage").fadeOut(2000);
      $("#hostText").fadeOut(2000)
      $("#securityText").fadeOut(2000)
      setTimeout(() => {
        $("#staffButton").fadeIn(2000);
        $("#tavernImage").fadeIn(2000);
      }, 2000)
  };

  render() {
    return (
      <div id="landingPage">
        <Menu />
        <h1 id="welcomeMessage">
          Oh hello there, adventurer! You've found yourself at the Scale. Come
          on in and have a seat. If you've got the coin, we've got the ale!
        </h1>
        <div id="tavernImageAndButton">
          <img
            alt="tavern"
            id="tavernImage"
            src={process.env.PUBLIC_URL + "/tavern.image.png"}
          />
          <button id="staffButton" onClick={this.handleHideImageAndButton}>
            Staff
          </button>
        </div>
        <div id="staffImageAndButton">
          <img
            alt="staff"
            id="staffImage"
            src={process.env.PUBLIC_URL + "/rex.and.chuck.image.png"}
          />
          <button id="tavernButton" onClick = {this.handleShowImageAndButton}>The Scale</button>
          <p id = "hostText">Your Host: <br /> Chuck Beary</p>
          <p id = "securityText">Your Security: <br />rex</p>
        </div>
        <p id = "disclaimerText">***All images used are either accredited, belong to their respective owners on twitch, or are free for personal use with no restrictions***</p>

        {/* image of tavern is "Mighty Oak Tavern" by Lucas Staniec Art - https://www.artstation.com/lucasstaniec */}
        <Logo />
      </div>
    );
  }
}

export default LandingPage;
