import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Speech from "./Speech";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/speech/`} element={<Speech />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
