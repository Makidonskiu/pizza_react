import React, { useEffect, useState } from "react";

// import axios from "axios";

import { Routes, Route } from "react-router-dom";
import { Header } from "./components/index";
import { Home, Cart } from "./pages/index";

function App() {
  const [pizzas, setPizzas] = useState([])
  useEffect( () => {
    fetch('http://myjson.dit.upm.es/api/bins/8vhz')
      .then( res => res.json())
      .then( json => setPizzas(json.pizzas) )
  }, [])
  
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
      <Routes>
        <Route path = '/pizza_react/' element = {<Home pizzas = {pizzas}/>}/>
        <Route path = '/cart' element = {<Cart/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
