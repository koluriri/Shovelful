import React, { useState } from "react";
import { ReactComponent as Logo } from "./logo.svg";
import { Link } from "react-router-dom";
import useTracking from "./useTracking";

const Speech = () => {
  useTracking();

  const [text, setText] = useState("");
  const [pitch, setPitch] = useState(1);

  const [animationClass, setAnimationClass] = useState("");

  const read = () => {
    if ("speechSynthesis" in window) {
      const uttr = new SpeechSynthesisUtterance();
      uttr.text = text;
      uttr.lang = "ja-JP";
      uttr.pitch = pitch;
      /*
      声を変えたいとき
      var voice = speechSynthesis.getVoices().find((voice) => {
        return voice.name === "Google 日本語";
      });
      if (voice) uttr.voice = voice;
      */
      window.speechSynthesis.speak(uttr);

      setAnimationClass("show");
      uttr.onend = () => {
        setAnimationClass("");
      };

      return;
    }
    alert("大変申し訳ありません。このブラウザは音声合成に対応していません。");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      read();
      setTimeout(() => {
        setText("");
      }, 100);
    }
  };

  return (
    <>
      <div className="speech-container">
        <div className="form-container">
          <Link to={"/"}>
            <Logo />
          </Link>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="ここに入力..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleKeyDown}
              className="input"
            />
            <span className={`border ${animationClass}`} />
          </div>
        </div>
        <div className="shifter">
          <div className="left">
            <small>
              読み上げたい文章を入力し、エンター（スマホの場合は改行）を押してください
            </small>
          </div>
          <div className="right">
            <img src="/icon/pitch_down.svg" />
            <input
              type="range"
              min={0}
              max={2}
              step={0.1}
              value={pitch}
              onChange={(e) => setPitch(Number(e.target.value))}
            />
            <img src="/icon/pitch_up.svg" />
          </div>
        </div>
      </div>
      <div className={`animation ${animationClass}`}>
        <div className="bg-red atom" />
        <div className="bg-green atom" />
        <div className="bg-blue atom" />
        <div className="bg-white atom" />
        <div className="bg-yellow atom" />
        <div className="bg-sky atom" />
      </div>
    </>
  );
};

export default Speech;
