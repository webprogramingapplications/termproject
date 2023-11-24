import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Main from "./components/layouts/Main";
import Join from "./components/layouts/Join";
import Login from "./components/layouts/Login";
import BannerSlider from "./components/layouts/BannerSlider";
import Product from "./components/layouts/Product";
import Footer from "./components/layouts/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/" element={<BannerSlider />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Product />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes>
    </Router>
  );
};

export default App;
