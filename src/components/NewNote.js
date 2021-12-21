import React from 'react'
import heroImage from "../images/hero-img.svg"

export const NewNote = () => {
    return (
        <div className="intro-section">
            <div className="intro-text">
                <h1>Welcome to Quicknote</h1>
                <p>Making note taking an easy task</p> 
                <a className="cta">Get started</a> 
            </div>
            <div className="hero-img">
                <img src={heroImage} alt="hero-img" />
            </div>
        </div>
    )
}
