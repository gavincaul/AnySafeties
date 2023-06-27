import React from "react";
import Landing from "anysafeties\src\pages\Landing.tsx";
import AboutUs from "anysafeties\src\pages\About.tsx";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
      <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/About" element={<AboutUs />}></Route>
      </Routes>
  );
}
