import React from 'react';
import Navigation from "./Navigation";
import Logo from "./Logo";

const About = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <h1>A propos</h1>
            <br/>
            <p>
                Cette application est un test réalisé le 22/07/2022.
            </p>
        </div>
    )
}

export default About;