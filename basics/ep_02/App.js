/**
 *
 *
 *  <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *      </div>
 *      <div id="child">
 *          <h1></h1>
 *      </div>
 *  </div>
 *
 *
 *
 *
 *
 *
 *
 *
 */


import React from "react";
import ReactDOM from "react-dom/client"


const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h1 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h1 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" }, // this is the field where we can declare html attribute for elements, in this case for h1
  "Hello World from React!!!"
);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);
