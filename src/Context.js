import React, { Component } from 'react';
import marked from 'marked';

import "./Context.css"

class Context extends Component {

    getMarkdownText() {
        var rawMarkup = marked('# This is _Markdown_.', { sanitize: true });
        return { __html: rawMarkup };
    }
    render() {
        var visibility = this.props.menuVisibility ? "show" : "hide"
        return <div id="context" className={visibility} dangerouslySetInnerHTML={this.getMarkdownText()} />
    }
}

export default Context;