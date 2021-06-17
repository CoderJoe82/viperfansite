import React, { Component } from 'react'
import './social.media.css'
import Menu from '../Menu/menu'
import Logo from '../Logo/logo'

class SocialMedia extends Component {
    render() {
        return (
            <div id = "socialMedia">
                <Menu />
                <Logo />
            </div>
        )
    }
}

export default SocialMedia