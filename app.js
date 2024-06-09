/*
nested elements

<div id='parent'>
<div id=''child>
<h1>iam a h1 tag </h1>
</div>
</div>

ReactElement(object) = HTML(browser understands)

*/

const Parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {id:'h1'}, "iam an h1 tag"),
    React.createElement("h2", {id:'h2'}, "iam an h2 tag"),
  ])
);

const header = React.createElement(
  "h1",
  { id: "headding" },
  "Hello world from react!..."
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);
root.render(Parent);
console.log(Parent);
