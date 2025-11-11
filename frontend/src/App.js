// подключаем библиотеку axios
// подключаем react-redux и @reduxjs/toolkit
// подключаем react-router для перехода по страницам

import "./App.css";
import axios from "./axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import Catalog from "./pages/catalog";
import Page404 from "./pages/page404";
import Home from "./pages/home";
import ProductPage from "./pages/poductPage";
import Basket from "./pages/basket";
import Category from "./pages/category";

function App() {
  const [first, setfirst] = useState();
  useEffect(() => {
    axios.get("/products").then((resp) => {
      const allData = resp.data;
      setfirst(allData);
    });
  }, [setfirst]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:category" element={<Category />} />
        <Route path="/catalog/:category/:product" element={<ProductPage />} />
        <Route path="/basket" element={<Basket />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
