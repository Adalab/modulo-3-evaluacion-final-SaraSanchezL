import "../styles/App.scss";
import getApiData from "../services/api";
import { useState, useEffect } from "react";
import CharactersList from "./CharactersList";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getApiData().then((response) => {
      setCharacters(response);
    });
  }, []);

  console.log(characters);

  return (
    <div className="App">
      <header>
        <h1>HARRY POTTER</h1>
      </header>

      <main>
        <CharactersList characters={characters} />
      </main>
    </div>
  );
}

export default App;
