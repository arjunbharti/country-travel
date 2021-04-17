import './App.css';
import { useState } from "react";

const flagsStack = {
  "🇮🇳" : "India",
  "🇦🇺" : "Australia",
  "🇺🇸" : "United States",
  "🇲🇽" : "Mexico",
  "🇵🇱" : "Poland"
}

var ourFlags = Object.keys(flagsStack);
export default function App() {
  var [meaning, setMeaning] = useState("");

  function flaginputhandler(event) {
    var userInput = event.target.value;
    var meaning = flagsStack[userInput];

    if (meaning === undefined) {
      meaning = "Sorry, this country is not allowing people from Mars 😂";
    }
    setMeaning(meaning);
  }

  function flagclickhandler(flag) {
    var meaning = flagsStack[flag];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Select the country you want to travel after covid-19 ends</h1>
      <input onChange={flaginputhandler}></input>
      <h2>{meaning}</h2>

      <h3>Select any country's flag shown below:</h3>

      {ourFlags.map(function (flag) {
        return (
          <div
            className="flagIcon"
            onClick={() => flagclickhandler(flag)}
            key={flag}
          >
            {flag}
          </div>
        );
      })}
    </div>
  );
}