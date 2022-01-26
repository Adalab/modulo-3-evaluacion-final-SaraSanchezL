import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
//Icons
import { ImMagicWand } from "react-icons/im";
import { GiMagicBroom } from "react-icons/gi";
//Components
import getApiData from "../services/api";
import CharactersList from "./CharactersList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import DetailsNotFound from "./DetailsNotFound";
import MessageNotResults from "./MessageNotResults";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterSelect, setFilterSelect] = useState("Gryffindor");
  const [filterGender, setFilterGender] = useState("all");
  const [filterSpecies, setFilterSpecies] = useState("any");

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
    } else if (data.key === "gender") {
      setFilterGender(data.value);
    } else if (data.key === "species") {
      setFilterSpecies(data.value);
    }
  };

  function SortArray(x, y) {
    return x.name.localeCompare(y.name);
  }
  characters.sort(SortArray);

  const filteredCharacter = characters
    .filter((character) =>
      character.name.toLowerCase().includes(filterName.toLowerCase())
    )
    .filter((houseCharacter) => houseCharacter.house === filterSelect)
    .filter(
      (genderCharacter) =>
        filterGender === "all" || filterGender === genderCharacter.gender
    )
    .filter(
      (specieCharacter) =>
        filterSpecies === "any" || filterSpecies === specieCharacter.species
    );

  const renderCharacterDetail = (props) => {
    const routeID = props.match.params.characterId;
    const foundCharacter = characters.find(
      (character) => character.id === routeID
    );
    if (foundCharacter === undefined) {
      return <DetailsNotFound />;
    } else {
      return <CharacterDetail character={foundCharacter} />;
    }
  };

  const handleBtnReset = (ev) => {
    ev.preventDefault();
    setFilterSelect("Gryffindor");
    setFilterName("");
    setFilterGender("all");
    setFilterSpecies("any");
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="mainTitle">
          <ImMagicWand /> Buscador de Personajes: Harry Potter <GiMagicBroom />
        </h1>
      </header>

      <main className="main">
        <Switch>
          <Route path="/" exact>
            <Filters
              filterName={filterName}
              handleFilter={handleFilter}
              filterSelect={filterSelect}
              filterGender={filterGender}
              filterSpecies={filterSpecies}
            />

            <button className="btnReset" onClick={handleBtnReset}>
              Reset
            </button>

            <CharactersList characters={filteredCharacter} />
            <MessageNotResults
              filteredCharacter={filteredCharacter}
              filterName={filterName}
            />
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
