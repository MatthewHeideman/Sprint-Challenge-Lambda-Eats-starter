import React from "react";

import {
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from './components/HomePage';
import Form from './components/Form';

const App = () => {
  return (
    <div className = "app">
      <Navbar /> 
      <Route exact path = '/'>
        <HomePage />
      </Route>
      <Route path = '/pizza'>
        <Form />
      </Route>
     </div>
  );
};
export default App;
