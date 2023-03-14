import React from "react";
import { Routes,Route } from "react-router-dom";
import Button from "./components/Button";
import Divider from "./components/Divider";
import Affix from "./components/Affix";
import Bread from "./components/Bread/Bread";
import BreadItem from "./components/Bread/BreadItem";
import Home from "./pages/Home";
import Header from "./pages/Header";
import "./index.css";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/header" element={<Header></Header>}></Route>
    </Routes>
   
   
  );
}

export default App;
