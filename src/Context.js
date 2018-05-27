import React, { Component } from 'react';
import "./Context.css"

class Context extends Component {
    render() {
        var visibility = this.props.menuVisibility ? "show" : "hide"

        return(
            <div id="context" className={visibility}>
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
        );
    }
}

export default Context;