import React, { Component } from "react";
import Menu from "../Menu/menu";
import "./streamer.friends.css";
import Logo from "../Logo/logo";
import Axios from "axios";

const apiBase = "https://decapi.me/";
const twitch = "twitch/";
const twitchApiBase = `${apiBase}${twitch}`;
const USER = "Vinyl_Viper";

class StreamerFriends extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accountAge: ''
        }
    }

    componentDidMount() {
        Axios.get(`${twitchApiBase}accountage/${USER}`)
        .then(data => {
            this.setState({
                accountAge: data.data
            })
        })
    }

  render() {
    return (
      <div id="streamerFriends">
        <Menu />
        <div id="streamerLinks">
          <div id="tester">{this.state.accountAge   }</div>
          <div></div>
        </div>
        <Logo />
      </div>
    );
  }
}

export default StreamerFriends;

// twitch api client-id:
// 8qhzae8grufxjye6i92oa9tp7nqtq9
// d
