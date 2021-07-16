import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/styles.css";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
        <Route exact path="/">
          <Home apiUrl={"https://rickandmortyapi.com/api/character"} />
        </Route>
    </Router>
  );
}

export default App;
