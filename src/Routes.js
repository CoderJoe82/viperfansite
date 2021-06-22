import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/landing.page'
import ScalePartners from './components/ScalePartners/scale.partners'
import SocialMedia from './components/SocialMedia/social.media'
import YourBartender from './components/YourBartender/your.bartender.page'

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path = "/viperfansite" exact component = {LandingPage}/>
                    <Route path = "/scalePartners" exact component = {ScalePartners}  />
                    <Route path = "/socialMedia" exact component = {SocialMedia} />
                    <Route path = "/yourBartender" exact component = {YourBartender} />
                </Switch>
            </Router>
        )
    }
}

export default Routes