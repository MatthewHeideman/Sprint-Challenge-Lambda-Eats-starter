import React from "react";

import {
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <div className = "app">
      
       <Homepage exact Route = '/' />
       <Form Route = '/pizza' />
     </div>
  );
};
export default App;
