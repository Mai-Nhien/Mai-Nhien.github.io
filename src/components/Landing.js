import React, { Component } from 'react'
import '../style/Landing.css';
import ReactRotatingText from 'react-rotating-text'

class Landing extends Component {
    render() {
        return (
            <div className="Landing">
              <header className="Landing-header">
                <p className="intro">
                  hi, i'm <span style={{color: "#4d79cb"}}>mai</span>
                </p>
                <p className="typewriter">
                    <span>a </span>
                    <ReactRotatingText items={['developer', 'creator', 'coffee enthusiast']} />
                </p>
              </header>
            </div>
          );
    }
}

export default Landing
