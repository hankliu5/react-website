import React, { Component } from 'react';
import marked from 'marked';

import "./Context.css"

class Context extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            markdown: null
        };
    }

    componentWillMount() {
        const readmePath = require("./Readme.md");

        fetch(readmePath)
            .then(response => {
                return response.text();
            })
            .then(text => {
                this.setState({
                    markdown: marked(text, { sanitize: true })
                })
            })
    }

    getMarkdownText() {
        var rawMarkup = marked('# This is _Markdown_.', { sanitize: true });
        return { __html: rawMarkup };
    }

    render() {
        var visibility = this.props.menuVisibility ? "show" : "hide"
        const { markdown } = this.state
        return <div id="context" className={visibility} dangerouslySetInnerHTML={{ __html: markdown }} />
    }
}

export default Context;