import ReactDom from "react-dom";
import React from 'react'
//import App from "./App";
const App = require("./App").default; //the same above



ReactDom.render(<App />,document.getElementById('root'));