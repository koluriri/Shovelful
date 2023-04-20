import React, { useState } from "react";

function Speech() {
  const [text, setText] = useState("");
  const [pitch, setPitch] = useState(1);

  const readAloud = () => {
    if ("speechSynthesis" in window) {
      const uttr = new SpeechSynthesisUtterance();
      uttr.text = text;
      uttr.lang = "ja-JP";
      uttr.pitch = pitch;
      window.speechSynthesis.speak(uttr);

      uttr.onend = () => {
        alert("end");
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
      readAloud();
      setTimeout(() => {
        setText("");
      }, 100);
    }
  };

  return (
    <>
      <h1>Shovelful</h1>
      <p>
        声の高さ
        <input
          type="range"
          min={0}
          max={2}
          step={0.1}
          value={pitch}
          onChange={(e) => setPitch(Number(e.target.value))}
        />
      </p>
      <input
        type="text"
        placeholder="入力…"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <p>
        音声を入力するとリアルタイムで話します。
        <br />
        ※エンターで発火
        <br />
        ※使えるブラウザが限られます
      </p>
    </>
  );
}

export default Speech;
