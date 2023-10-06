import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header";
import MainPage from "../src/pages/MainPage";
import Checkout from "../src/pages/Checkout";
import React from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sepet" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
