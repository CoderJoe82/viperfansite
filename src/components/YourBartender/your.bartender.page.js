import React, { Component } from "react";
import Menu from "../Menu/menu";
import Logo from "../Logo/logo";
import "./your.bartender.page.css";

class YourBartender extends Component {
  render() {
    return (
      <div id="yourBartender">
        <Menu />
        <h1 id="viperGreeting">
          "Welcome to the Scale, Deep in the Viper Pit. My name is Viper, I'll
          be your bartender this evenin'! How ya doing darlin'?"
        </h1>
        <img
          id="viperPic"
          alt="viperPicture"
          src={process.env.PUBLIC_URL + "/viper.image.png"}
        />

        <Logo />
      </div>
    );
  }
}

export default YourBartender;
