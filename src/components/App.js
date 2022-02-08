import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
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
import NotFound from "./NotFound";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");
  const [filterGender, setFilterGender] = useState("all");
  const [filterSpecies, setFilterSpecies] = useState("any");
  const [filterHogwartsStudent, setFilterHogwartsStudent] = useState(false);
  const [order, setOrder] = useState(false);

  useEffect(() => {
    getApiData(filterHouse).then((response) => {
      setCharacters(response);
    });
  }, [filterHouse]);

  const handleBtnOrder = () => {
    if (order === false) {
      characters.sort((a, b) => a.name.localeCompare(b.name));
      setOrder(true);
    } else {
      setOrder(false);
      characters.sort((a, b) => a.id - b.id);
    }
  };

  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "house") {
      setFilterHouse(data.value);
    } else if (data.key === "gender") {
      setFilterGender(data.value);
    } else if (data.key === "species") {
      setFilterSpecies(data.value);
    } else if (data.key === "student") {
      setFilterHogwartsStudent(data.value);
    }
  };

  const filteredCharacter = characters
    .filter((character) =>
      character.name.toLowerCase().includes(filterName.toLowerCase())
    )
    .filter((houseCharacter) => houseCharacter.house === filterHouse)
    .filter(
      (genderCharacter) =>
        filterGender === "all" || filterGender === genderCharacter.gender
    )
    .filter(
      (specieCharacter) =>
        filterSpecies === "any" || filterSpecies === specieCharacter.species
    )
    .filter(
      (eachCharacter) => eachCharacter.hogwartsStudent === filterHogwartsStudent
    );

  const routeData = useRouteMatch("/character/:house/:characterId");
  const renderCharacterDetail = () => {
    const routeHouse = routeData.params.house;
    if (routeHouse !== "Gryffindor") {
      setFilterHouse(routeHouse);
    }
    const routeID = parseInt(routeData.params.characterId);
    const foundCharacter = characters.find(
      (character) => character.id === routeID
    );
    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return <DetailsNotFound />;
    }
  };

  const handleBtnReset = (ev) => {
    ev.preventDefault();
    setFilterHouse("Gryffindor");
    setFilterName("");
    setFilterGender("all");
    setFilterSpecies("any");
    setOrder(false);
    characters.sort((a, b) => a.id - b.id);
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
              handleFilter={handleFilter}
              filterName={filterName}
              filterHouse={filterHouse}
              filterGender={filterGender}
              filterSpecies={filterSpecies}
              filterHogwartsStudent={filterHogwartsStudent}
            />

            <button className="btns" onClick={handleBtnOrder}>
              Ordenar Alfabéticamente
            </button>
            <p className="textOrder">
              {order === false ? "" : "Ordenados alfabéticamente"}
            </p>

            <button className="btns" onClick={handleBtnReset}>
              Reiniciar Búsqueda
            </button>

            <CharactersList characters={filteredCharacter} />
            <MessageNotResults
              filteredCharacter={filteredCharacter}
              filterName={filterName}
            />
          </Route>

          <Route
            path="/character/:house/:characterId"
            render={renderCharacterDetail}
          />

          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
