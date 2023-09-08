//Using React

/* const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World From React"
); */

//Nested Html using react

// <div id="parent">
//     <div id="child">
//         <h1>I am h1 tag</h1>
//     </div>
// </div>

//If we add sibilling in children then we we have to put it into array format

// <div id="parent">
//     <div id="child">
//         <h1>I am h1 tag</h1>
//         <h2>I am h2 tag</h2>
//     </div>
// </div>

/* 
const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am H1 tag")
  )
); */

// To avoid this type of nesting we use jsx.

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, `I am h2 tag`),
  ])
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
