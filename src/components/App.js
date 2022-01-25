import "../styles/App.scss";
import getApiData from "../services/api";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Logo from "../images/title-logo.png";
import CharactersList from "./CharactersList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import CharacterNotFound from "./CharacterNotFound";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterSelect, setFilterSelect] = useState("Gryffindor");

  useEffect(() => {
    getApiData(filterSelect).then((response) => {
      setCharacters(response);
    });
  }, [filterSelect]);

  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "house") {
      setFilterSelect(data.value);
    }
  };

  const filteredCharacter = characters
    .filter((character) => character.name.toLowerCase().includes(filterName))
    .filter((houseCharacter) => houseCharacter.house === filterSelect);

  const renderCharacterDetail = (props) => {
    const routeID = props.match.params.characterId;
    const foundCharacter = characters.find(
      (character) => character.id === routeID
    );
    if (foundCharacter === undefined) {
      return <CharacterNotFound />;
    } else {
      return <CharacterDetail character={foundCharacter} />;
    }
  };

  const handleBtnReset = (ev) => {
    ev.preventDefault();
    setFilterSelect("Gryffindor");
    setFilterName("");
  };

  return (
    <div className="App">
      <header>
        <img src={Logo} alt="Harry Potter Logo" />
      </header>

      <main>
        <Switch>
          <Route path="/" exact>
            <button onClick={handleBtnReset}>Reset</button>

            <Filters
              filterName={filterName}
              handleFilter={handleFilter}
              filterSelect={filterSelect}
            />

            <CharactersList characters={filteredCharacter} />
          </Route>

          <Route
            path="/character/:characterId"
            render={renderCharacterDetail}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
