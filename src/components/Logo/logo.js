import React, { Component } from 'react'
import './logo.css'

class Logo extends Component {
    render() {
        return (
            <div id = "logo">
                <img src = {process.env.PUBLIC_URL + '/vinyl.viper.logo.png'} id = "logoImage"/>
                <div id = "vinylV">V</div>
                <div id = "vinylI">I</div>
                <div id = "vinylN">N</div>
                <div id = "vinylY">Y</div>
                <div id = "vinylL">L</div>
                <div id = "viperV">V</div>
                <div id = "viperI">I</div>
                <div id = "viperP">P</div>
                <div id = "viperE">E</div>
                <div id = "viperR">R</div>
            </div>
        )
    }
}

export default Logo