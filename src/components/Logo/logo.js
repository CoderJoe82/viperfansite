import React, { Component } from 'react'
import './logo.css'

class Logo extends Component {
    render() {
        return (
            <div id = "logo">
                <img alt = "logo" src = {process.env.PUBLIC_URL + '/viper.icon.png'} id = "logoImage"/>
                
            </div>
        )
    }
}

export default Logo