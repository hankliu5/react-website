import React, { Component } from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import Context from "./Context";
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
            <div className="row">
                <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} />
                <div className="column left">
                    <MenuButton handleMouseDown={this.handleMouseDown} />
                </div>
                <div className="column right">
                    <Context menuVisibility={this.state.visible} />
                </div>
            </div>
        );
    }
}

export default MenuContainer;
