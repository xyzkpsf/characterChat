import React from "react";
import "./App.css";
import ChatBox from "./Components/ChatBox";
import { Character } from "./Utils/Types";

const Elon: Character = {
  id: 1,
  FirstName: "Elon",
  LastName: "Musk",
  picture:
    "https://en.wikipedia.org/wiki/Elon_Musk#/media/File:Elon_Musk_2015.jpg",
};

function App() {
  return (
    <div className="App">
      <ChatBox character={Elon} />
    </div>
  );
}

export default App;
