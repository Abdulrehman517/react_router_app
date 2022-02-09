import { Link } from 'react-router-dom';
import React, { Component } from 'react';


class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/parent'>Parent</Link>
            </nav>
        );
    }
}
 
export default Navbar;