import React, { Component } from "react";
import Menu from "../Menu/menu";
import "./scale.partners.css";
import Logo from "../Logo/logo";
import Axios from "axios";

class ScalePartners extends Component {
  constructor(props) {
    super(props);

    this.state = {
      otter: {
        userAvatar: "",
      },
      drsickmaster: {
        userAvatar: "",
      },
      jg: {
        userAvatar: "",
      },
      mazziemay: {
        userAvatar: "",
      },
      lonelysharkmelb: {
        userAvatar: "",
      },
      suniiva: {
        userAvatar: "",
      },
      eeaden: {
        userAvatar: "",
      },
      battlestation1: {
        userAvatar: "",
      },
      unclegeeb: {
        userAvatar: "",
      },
    };
  }

  componentDidMount() {
    Axios.get("https://decapi.me/twitch/avatar/ottertot141").then((data) => {
      this.setState({
        ...this.state,
        otter: {
          ...this.state.otter,
          userAvatar: data.data,
        },
      });
    });
    Axios.get("https://decapi.me/twitch/avatar/drsickmaster").then((data) => {
      this.setState({
        ...this.state,
        drsickmaster: {
          ...this.state.otter,
          userAvatar: data.data,
        },
      });
    });
    Axios.get("https://decapi.me/twitch/avatar/jg_darhk").then((data) => {
      this.setState({
        ...this.state,
        jg: {
          ...this.state.otter,
          userAvatar: data.data,
        },
      });
    });
    Axios.get("https://decapi.me/twitch/avatar/mazziemay").then((data) => {
      this.setState({
        ...this.state,
        mazziemay: {
          ...this.state.otter,
          userAvatar: data.data,
        },
      });
    });
    Axios.get("https://decapi.me/twitch/avatar/lonelysharkmelb").then(
      (data) => {
        this.setState({
          ...this.state,
          lonelysharkmelb: {
            ...this.state.otter,
            userAvatar: data.data,
          },
        });
      }
    );
    Axios.get("https://decapi.me/twitch/avatar/suniiva").then((data) => {
      this.setState({
        ...this.state,
        suniiva: {
          ...this.state.otter,
          userAvatar: data.data,
        },
      });
    });
    Axios.get("https://decapi.me/twitch/avatar/eeaden").then((data) => {
      this.setState({
        ...this.state,
        eeaden: {
          ...this.state.otter,
          userAvatar: data.data,
        },
      });
    });
    Axios.get("https://decapi.me/twitch/avatar/battlestation1").then((data) => {
      this.setState({
        ...this.state,
        battlestation1: {
          ...this.state.otter,
          userAvatar: data.data,
        },
      });
    });
    Axios.get("https://decapi.me/twitch/avatar/unclegeeb").then((data) => {
      this.setState({
        ...this.state,
        unclegeeb: {
          ...this.state.otter,
          userAvatar: data.data,
        },
      });
    });
  }

  // function setData(twitchUser) {
  //   let streamerData = {};
  //   await Axios.get(`https://decapi.me/twitch/accountage/${twitchUser}`).then(
  //     (data) => {
  //       const channelLink = data.config.url;
  //       const userName = channelLink.split("/").slice(-1).join("");
  //       const userLink = `https://decapi.me/twitch/${userName}`;
  //       const userAvatar = `https://decapi.me/twitch/avatar/${userName}`;
  //       streamerData["userName"] =  `${userName}`;
  //       streamerData["userLink"] =  `${userLink}`;
  //       streamerData["userAvatar"] =  `${userAvatar}`;
  //     }
  //   );
  //   return streamerData;
  // };

  render() {
    return (
      <div id="streamerFriends">
        <Menu />
        <div id="streamerLinks">
          <h1 id="streamerListTitle">
            You can also see these great adventurers down below!
          </h1>
          <div id="streamerList">
            <div className="friendRows">
              <img
                alt="otter"
                className="avatarImages"
                src={this.state.otter.userAvatar}
              />
              <p className="directionText">
                You can watch Otter{" "}
                <a
                  href="https://www.twitch.com/ottertot141"
                  style={{ color: "white" }}
                  target = "_blank"
                  rel = "noreferrer"
                >
                  Here
                </a>
              </p>
            </div>
            <div className="friendRows">
              <img
                alt="drsickmaster"
                className="avatarImages"
                src={this.state.drsickmaster.userAvatar}
              />
              <p className="directionText">
                You can watch DrSickMaster{" "}
                <a
                  href="https://www.twitch.com/drsickmaster"
                  style={{ color: "white" }}
                  target = "_blank"
                  rel = "noreferrer"

                >
                  Here
                </a>
              </p>
            </div>
            <div className="friendRows">
              <img
                alt="jg"
                className="avatarImages"
                src={this.state.jg.userAvatar}
              />
              <p className="directionText">
                You can watch JG_Darhk{" "}
                <a
                  href="https://www.twitch.com/jg_darhk"
                  style={{ color: "white" }}
                  target = "_blank"
                  rel = "noreferrer"

                >
                  Here
                </a>
              </p>
            </div>
            <div className="friendRows">
              <img
                alt="mazziemay"
                className="avatarImages"
                src={this.state.mazziemay.userAvatar}
              />
              <p className="directionText">
                You can watch MazzieMay{" "}
                <a
                  href="https://www.twitch.com/mazziemay"
                  style={{ color: "white" }}
                  target = "_blank"
                  rel = "noreferrer"

                >
                  Here
                </a>
              </p>
            </div>
            <div className="friendRows">
              <img
                alt="lonelysharkmelb"
                className="avatarImages"
                src={this.state.lonelysharkmelb.userAvatar}
              />
              <p className="directionText">
                You can watch LonelySharkMelb{" "}
                <a
                  href="https://www.twitch.com/lonelysharkmelb"
                  style={{ color: "white" }}
                  target = "_blank"
                  rel = "noreferrer"

                >
                  Here
                </a>
              </p>
            </div>
            <div className="friendRows">
              <img
                alt="suniiva"
                className="avatarImages"
                src={this.state.suniiva.userAvatar}
              />
              <p className="directionText">
                You can watch Suniiva{" "}
                <a
                  href="https://www.twitch.com/suniiva"
                  style={{ color: "white" }}
                  target = "_blank"
                  rel = "noreferrer"

                >
                  Here
                </a>
              </p>
            </div>
            <div className="friendRows">
              <img
                alt="eeaden"
                className="avatarImages"
                src={this.state.eeaden.userAvatar}
              />
              <p className="directionText">
                You can watch Eeaden{" "}
                <a
                  href="https://www.twitch.com/Eeaden"
                  style={{ color: "white" }}
                  target = "_blank"
                  rel = "noreferrer"

                >
                  Here
                </a>
              </p>
            </div>
            <div className="friendRows">
              <img
                alt="battlestation1"
                className="avatarImages"
                src={this.state.battlestation1.userAvatar}
              />
              <p className="directionText">
                You can watch BattleStation1{" "}
                <a
                  href="https://www.twitch.com/BattleStation1"
                  style={{ color: "white" }}
                  target = "_blank"
                  rel = "noreferrer"
                  
                >
                  Here
                </a>
              </p>
            </div>
            <div className="friendRows">
              <img
                alt="unclegeeb"
                className="avatarImages"
                src={this.state.unclegeeb.userAvatar}
              />
              <p className="directionText">
                You can watch UncleGeeb{" "}
                <a
                  href="https://www.twitch.com/unclegeeb"
                  style={{ color: "white" }}
                  target = "_blank"
                  rel = "noreferrer"

                >
                  Here
                </a>
              </p>
            </div>
          </div>
        </div>
        <Logo />
      </div>
    );
  }
}

export default ScalePartners;
