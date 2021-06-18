import React, { Component } from "react";
import "./landing.page.css";
import Menu from "../Menu/menu";
import Logo from "../Logo/logo";

const displayImage = [
    {
        image: "/rex.image.png"
    }
]

class LandingPage extends Component {
  render() {
    return (
      <div id="landingPage">
        <Menu />
        <h1 id="welcomeMessage">
          Welcome to the Scale, deep in the Viper Pit. My name is Viper. I'm
          your bartender this evening! How are ya, Darlin'?
        </h1>
        <div id="tavernImageAndButton">
          <img
            alt="tavern image"
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
