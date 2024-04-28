import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";

// const parent = React.creatElement(
//     "div",
//     {id:"parent"},
//     React.creatElement(
//         "h1",
//         {id:"heading"},
//         "hello world from react"    

//     )
// )

// const heading = React.creatElement(
//     "h1",
//     {id:"heading",xyz:"abc"},
//     "hello world from react"
// )
// const root = React.creatRoot(document.getElementById("root"));
//jsx transpiles react code to React.createElement()

// root.render(heading);
// const heading = React.createElement("h1",{id:"heading"},"hello  world from react");
//this is a react element



const AppLayout = ()  =>{
    return (
        <div className="app">
            <Header/>
            <Body/>

        </div>
    )
}

//this is a react componet 


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);