const parent = React.creatElement("div", {
    id: "parent"
}, React.creatElement("h1", {
    id: "heading"
}, "hello world from react"));
const heading = React.creatElement("h1", {
    id: "heading",
    xyz: "abc"
}, "hello world from react");
const root = React.creatRoot(document.getElementById("root"));
root.render(heading);

//# sourceMappingURL=index.7c0ccee6.js.map
