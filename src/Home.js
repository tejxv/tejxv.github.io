import React from "react";
import "./Home.css";
import zoomInDown from "react-animations/lib/zoomInDown";
import styled, { keyframes } from "styled-components";

function Home() {
  const zoomInDownAnim = keyframes`${zoomInDown}`;

  const zoomDiv = styled.div`
    animation: 1s ${zoomInDownAnim};
  `;

  return (
    <zoomDiv>
      <div className="flexbox">
        <div className="outerbox">
          <div className="nameContainer">
            <img src="pfp.png"></img>
            <div>Tejas Upadhyay</div>
          </div>

          <div className="subText">
            Web Developer, UI UX Designer, Freelancer
          </div>
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
              {/* <a href="/resume">Résumé</a>{" "} */}
              <a href="https://drive.google.com/file/d/1CqApJJur5IDZtwrM4py3CA2Wbq4whJPQ/view?usp=sharing">
                Résumé
              </a>{" "}
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
    </zoomDiv>
  );
}

export default Home;
