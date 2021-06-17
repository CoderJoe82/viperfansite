import React, { Component } from 'react'
import './menu.css'
import { Link } from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <div id = "mainMenu" style = {{backgroundImage: `linear-gradient(to bottom, transparent, rgb(0, 0, 0)), url(${process.env.PUBLIC_URL + '/snake.menu.jpg'})`, backgroundSize: '100% auto'    }}>
                <Link className = "navSpots" to = "/" style = {{textDecoration: 'none'}}>
                    <button className = "navButtons">
                        Home
                    </button>
                </Link>
                <Link className = "navSpots" to = "/streamerFriends" style = {{textDecoration: 'none'}}>
                    <button className = "navButtons">
                        Streamer <br /> Friends
                    </button>
                </Link>
                <Link className = "navSpots" to = "/socialMedia" style = {{textDecoration: 'none'}}>
                    <button className = "navButtons">
                        Social <br /> Media
                    </button>
                </Link>

            </div>
        )
    }
}

export default Menu