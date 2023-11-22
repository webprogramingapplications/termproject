import React from "react";
import Header from "./components/layouts/Header";
import Main from "./components/layouts/Main";
import BannerSlider from "./components/layouts/BannerSlider";
import Product from "./components/layouts/Product";
import Footer from "./components/layouts/Footer";

const App: React.FC = () => {
  return (
    <>
      <Main />
      <Header />
      <BannerSlider />
      <Product />
      <Footer />
    </>
  );
};

export default App;
