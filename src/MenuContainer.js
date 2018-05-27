import React, { Component } from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import "./MenuContainer.css"


class MenuContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            visible: false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        
    }

    handleMouseDown(e) {
        this.toggleMenu();

        console.log("clicked");
        
        // Prevents further propagation of the current event in the capturing 
        // and bubbling phases.
        e.stopPropagation();
    }

    toggleMenu() {
        this.setState(
            {
                visible: !this.state.visible
            }
        );
    }

    render() {
        var visibility = this.state.visible ? "hide" : "show"
        return (
            <div class="row">
                <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} />
                <div class="column left">
                    <MenuButton handleMouseDown={this.handleMouseDown} />
                </div>
                <div class="column right">
                    <div id="flyoutContext" onMouseDown={this.handleMouseDown} className={visibility}>
                        <p>Can you spot the item that doesn't belong?</p>
                        <ul>
                            <li>Lorem</li>
                            <li>Ipsum</li>
                            <li>Dolor</li>
                            <li>Sit</li>
                            <li>Bumblebees</li>
                            <li>Aenean</li>
                            <li>Consectetur</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuContainer;
