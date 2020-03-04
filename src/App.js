import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import PersonCard from "./components/PersonCard";
// import Button from "./components/Button";
import PersonCard2 from "./components/PersonCard2";

function App() {
  return (
    <div className="App">
      <PersonCard2 firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      <PersonCard2
        firstName="John"
        lastName="Smith"
        age={88}
        hairColor="Brown"
      />
      <PersonCard2
        firstName="Millard"
        lastName="Filmore"
        age={50}
        hairColor="Brown"
      />
      <PersonCard2
        firstName="Maria"
        lastName="Smith"
        age={62}
        hairColor="Brown"
      />
    </div>
  );
}

export default App;
