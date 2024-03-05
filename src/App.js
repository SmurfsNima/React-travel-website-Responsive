import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/navbar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Porducts";
import Signup from "./components/pages/Signup";
import Loader from "./components/loader";

function App() {
  const [loading, setloading] = useState(false);
  // useEffect(() => {
  //   setloading(true);
  //   setTimeout(() => setloading(false), 3000);
  // }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}
export default App;
