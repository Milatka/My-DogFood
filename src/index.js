//import React from "react";
import ReactDOM from "react-dom/client";
//import "./style.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


//const Card = function(){
 // return <div className="card">^_^</div>}


/*ReactDOM.render(
<>
    <h1>Hello <span className="mark">React</span>!</h1>
    <div class="box">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  </div>
</>,
 document.querySelector("#root")
) */

/* ReactDOM.render(
  <App/>,
  document.querySelector("#root")
) */

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
)