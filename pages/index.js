import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import buildspaceLogo from "../assets/buildspace-logo.png";

const Home = () => {
  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };

  const [userInput, setUserInput] = useState("");
  return (
    <div className="root">
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Gen.io</h1>
          </div>
          <div className="header-subtitle">
            <h2>Let the AI get it done</h2>
          </div>
        </div>
        <div className="prompt-container">
          <textarea className="prompt-box" placeholder="start typing here" value={userInput} onChange={onUserChangedText} />
        </div>
        <div className="prompt-buttons">
          <a className="generate-button" onClick={null}>
            <div className="generate">
              <p>Generate</p>
            </div>
          </a>
        </div>
      </div>
      <div className="badge-container grow">
        <a href="https://buildspace.so/builds/ai-writer" target="_blank" rel="noreferrer">
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
