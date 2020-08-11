import React, { Component } from 'react';
import '../styles/style.css'

class header extends Component {
    render() {
        return (
            <div className="header">
                <h1 className="text">Clicky Game!</h1>
        <h2 className="text">Score: {this.props.score}</h2>
        <h2 className="text">Losses: {this.props.losses}</h2>
        <h2 className="text">Wins: {this.props.wins}</h2>
            </div>
        );
    }
}

export default header;