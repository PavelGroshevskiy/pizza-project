import React, { useEffect, useState } from "react";
import "./scss/app.scss";
import { Header } from "./components";
import { Cart, Home } from "./pages";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setPizzas } from "./actions/pizzas";

function App({}) {
  // const [pizzas, setPizzas] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {/* <Home /> */}
      </div>
    </div>
  );
}

export default App;
