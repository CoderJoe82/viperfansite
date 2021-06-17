import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/landing.page'
import SocialMedia from './components/SocialMedia/social.media'
import StreamerFriends from './components/StreamerFriends/streamer.friends'

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path = "/" exact component = {LandingPage}/>
                    <Route path = "/streamerFriends" exact component = {StreamerFriends}  />
                    <Route path = "/socialMedia" exact component = {SocialMedia} />
                </Switch>
            </Router>
        )
    }
}

export default Routes