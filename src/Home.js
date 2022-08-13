import React from "react";
import "./Home.css";
// import pfp from './public/pfp.png';

function Home() {
  return (
    <div className="flexbox">
      <div className="outerbox">
        <div className="nameContainer">
          <img src="pfp.png"></img>
          <div>Tejas Upadhyay</div>
        </div>

        <div className="subText">Web Developer, UI UX Designer, Freelancer</div>
        <div className="topLinksContainer">
          {" "}
          <div className="introContainer">
            {/* <img src="pfp.png"></img> */}
            <div className="intro">
              Fuelled by a passion for designing compelling products, I have a
              deep desire to excel and continuously improve in my work.
            </div>
          </div>
          <span className="topLinks">
            {" "}
            <a href="/resume">Résumé</a>{" "}
          </span>
          <span className="topLinks">
            {" "}
            <a href="https://github.com/tejxv">GitHub</a>{" "}
          </span>
          <span className="topLinks">
            {" "}
            <a href="https://www.linkedin.com/in/tejas-u/">Linkedin</a>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
