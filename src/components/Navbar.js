import React from 'react';
import {
    Link,
  } from "react-router-dom";

  function Navbar() {
    return (
        <div>
            <h1>Lambda Eats</h1>
            <button>
                <Link to="/">Home</Link>
            </button>        
            <button>
                <Link to="/pizza">Order Now!</Link>
            </button>
        </div>

    )
  }
   export default Navbar;