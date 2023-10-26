import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Contact from "./components/Contact";
import MovieDetail from "./components/movieDetail";
import Carts from "./components/cart";
import "./App.css";
import Login from "./components/login";

const App = () => {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (data) => {
    let isPresent = false;
    cart.forEach((movie) => {
      if (data.id === movie.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 5000);

      return;
    }
    setCart([...cart, data]);
  };

  const handleChange = (data, d) => {
    const ind = cart.findIndex((item) => item.id === data.id);

    if (ind !== -1) {
      const updatedCart = [...cart];
      updatedCart[ind].amount += d;
      if (updatedCart[ind].amount === 0) {
        updatedCart.splice(ind, 1);
      }
      setCart(updatedCart);
    }
  };

  return (
    <Router>
      <Navbar size={cart.length} />

      {warning && (
        <div className="warning">Item is already added in the Cart</div>
      )}
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/Home" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route
          path="/Movies/:id"
          element={<MovieDetail handleClick={handleClick} />}
        />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/Cart"
          element={
            <Carts cart={cart} setCart={setCart} handleChange={handleChange} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
