import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import About from "./About";
import Contact from "./Contact";
import Help from "./Help";
import Shop from "./Shop";
import Home from "./Home";
import Counter from "./Counter";
import UseEffectDemo from "./useEffectDemo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<About/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/app" element={<App/>}/>
          <Route path="/contect" element={<Contact/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/useEffect" element={<UseEffectDemo/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
