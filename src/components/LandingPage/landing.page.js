import React, { Component } from 'react'
import './landing.page.css'
import Menu from '../Menu/menu'
import Logo from '../Logo/logo'


class LandingPage extends Component {
    render() {
        return (
            <div id = "landingPage">
                <Menu />
                <Logo />
            </div>
        )
    }
}

export default LandingPage