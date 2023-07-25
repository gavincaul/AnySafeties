import React from "react";
import Landing from "./pages/Landing.tsx";
import AboutUs from "./pages/About.tsx";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
      <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
      </Routes>
  );
}
