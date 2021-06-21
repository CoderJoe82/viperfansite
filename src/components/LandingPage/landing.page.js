import React, { Component } from "react";
import "./landing.page.css";
import Menu from "../Menu/menu";
import Logo from "../Logo/logo";

class LandingPage extends Component {
  render() {
    return (
      <div id="landingPage">
        <Menu />
        <h1 id="welcomeMessage">
          Oh hello there, adventurer! You've found yourself at the Scale. Come on in and have a seat. If you've got the coin, we've got the ale!
        </h1>
        <div id="tavernImageAndButton">
          <img
            alt="tavern"
            id="tavernImage"
            src={process.env.PUBLIC_URL + "/tavern.image.png"}
          />
          <button id = "staffButton">Staff</button>
        </div>

        {/* image of tavern is "Mighty Oak Tavern" by Lucas Staniec Art - https://www.artstation.com/lucasstaniec */}
        <Logo />
      </div>
    );
  }
}

export default LandingPage;
