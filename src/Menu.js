import React, { Component } from "react";
import "./styles/Menu.css"

class Menu extends Component {
    render() {
        var visibility = this.props.menuVisibility ? "show" : "hide"

        return (
            <div id="flyoutMenu" onMouseDown={this.props.handleMouseDown} className={visibility}>
                <h2><a href="#">Home</a></h2>
                <h2><a href="#">About</a></h2>
                <h2><a href="#">Contact</a></h2>
                <h2><a href="#">Search</a></h2>
            </div>
        );
    }
}

export default Menu;