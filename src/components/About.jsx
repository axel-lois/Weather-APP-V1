import React from "react";
import Classes from "./About.module.css"

const About = (props) =>{
    return <div className={Classes.container}>
        <h1>About the application and it's creator</h1>
        <p>My name is Axel and i'm the creator of this simple App.</p>
        <p>This application was made for educational purposes, under the supervisation of Henry's bootcamp teachers.</p>
        <p>The technologies used to develop this application are:</p>
        <ul>
            <li>React</li>
            <li>Router</li>
            <li>Css modules</li>
            <li>Javascript</li>
        </ul>
        <p>Besides, the Create-react-app library was also used to make this project.</p>
    </div>
}

export default About;