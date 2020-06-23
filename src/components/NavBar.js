import React, {Component} from 'react'
import '../style/NavBar.css'
import {Link} from 'react-scroll'

class NavBar extends Component {
    state = {}
    render() {
        return (
            <div className="navbar">
                <ul>
                    <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="navItem"
                    >
                        about
                    </Link>
                    <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="navItem"
                    >
                        projects
                    </Link>
                </ul>
            </div>
        );
    }
}

export default NavBar;