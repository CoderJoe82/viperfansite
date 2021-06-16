import React, { Component } from 'react'
import './logo.css'

class Logo extends Component {
    render() {
        return (
            <div id = "logo">
                <img src = {process.env.PUBLIC_URL + '/vinyl.viper.logo.png'} id = "logoImage"/>
            </div>
        )
    }
}

export default Logo