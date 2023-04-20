import React, { useState } from "react";
import { ReactComponent as Logo } from "./logo.svg";
import { Link } from "react-router-dom";

const Speech = () => {
  const [text, setText] = useState("");
  const [pitch, setPitch] = useState(1);

  const [animationClass, setAnimationClass] = useState("animation");

  const read = () => {
    if ("speechSynthesis" in window) {
      const uttr = new SpeechSynthesisUtterance();
      uttr.text = text;
      uttr.lang = "ja-JP";
      uttr.pitch = pitch;

      var voice = speechSynthesis.getVoices().find((voice) => {
        return voice.name === "Google 日本語";
      });
      if (voice) uttr.voice = voice;

      window.speechSynthesis.speak(uttr);

      setAnimationClass("animation show");

      uttr.onend = () => {
        setAnimationClass("animation");
      };

      return;
    }
    alert("大変申し訳ありません。このブラウザは音声合成に対応していません。");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
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
              placeholder="テキストを入力してEnter"
              value={text}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className="input"
            />
            <span className="border" />
          </div>
        </div>
        <div className="shifter">
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
      <div className={animationClass}>
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
