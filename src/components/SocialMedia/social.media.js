import React, { Component } from "react";
import "./social.media.css";
import Menu from "../Menu/menu";
import Logo from "../Logo/logo";
import Axios from "axios";

class SocialMedia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viperTwitchIcon: "",
    };
  }

  componentDidMount() {
    Axios.get("https://decapi.me/twitch/avatar/vinyl_viper").then((data) => {
      this.setState({
        viperTwitchIcon: data.data,
      });
    });
  }

  render() {
    return (
      <div id="socialMedia">
        <Menu />
        <div id="twitchSpot">
          <img
            alt="twitchAvatar"
            id="twitchPicture"
            src={this.state.viperTwitchIcon}
          />
          <p>
            Find Viper on <a href="https://www.twitch.com/vinyl_viper" rel = "noreferrer" target = "_blank" style = {{color: 'white'}}>Twitch</a>
          </p>
        </div>
        <div id = "twitterSpot">
            <img alt = "twitterAvatar"
            id = "twitterPicture"
            src = {process.env.PUBLIC_URL + '/viperTwitterIcon.png'} />
            <p>
                Find Viper on <a href = "https://twitter.com/vinylviper93?lang=en" target = "_blank" rel = "noreferrer" style = {{color: 'white'}}>Twitter</a>
            </p>
        </div>
        <div id = "instaSpot">
            <img alt = "instaAvatar"
            id = "instaPic"
            src = {process.env.PUBLIC_URL + '/viper.insta.png'}
            />
            <p>
                Find Viper on <a href = "https://www.instagram.com/vinyl_viper/" target = "_blank" rel = "noreferrer" style = {{color: 'white'}}>Instagram</a>
            </p>
        </div>
        <Logo />
      </div>
    );
  }
}

export default SocialMedia;
