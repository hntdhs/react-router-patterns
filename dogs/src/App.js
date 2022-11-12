import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import NavBar from "./NavBar";


function App({dogs}) {
    return (
      <div>
        <BrowserRouter>
          <NavBar dogs={dogs} />
            <Routes dogs={dogs} />
        </BrowserRouter>
      </div>
    );
  }
//   creates a navbar with all of the dog routes as options; this will appear on every screen

export const dogs = [
    {
      name: "Whiskey",
      age: 5,
      // src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      // src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      // src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      // src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ];
  
  App.defaultProps = { dogs };
  
  export default App;

