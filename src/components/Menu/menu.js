import React, { Component } from 'react'
import './menu.css'

class Menu extends Component {
    render() {
        return (
            <div id = "mainMenu" style = {{backgroundImage: `linear-gradient(to bottom, transparent, rgb(0, 0, 0)), url(${process.env.PUBLIC_URL + '/snake.menu.jpg'})`, backgroundSize: '100% auto'}}>
            </div>
        )
    }
}

export default Menu