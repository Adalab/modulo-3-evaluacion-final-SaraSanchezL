import "../styles/App.scss";
import getApiData from "../services/api";
import { useState, useEffect } from "react";
import Logo from '../images/title-logo.png'
import CharactersList from "./CharactersList";
import Filters from './Filters'

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState ('');
  const [filterSelect, seFilterSelect] =useState ('Gryffindor');

  useEffect(() => {
    getApiData(filterSelect).then((response) => {
      setCharacters(response);
    });
  }, [filterSelect]);


  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "house") {
      seFilterSelect(data.value);
    }
  };


const filteredCharacter = characters
.filter((character) => character.name.toLowerCase().includes(filterName)).filter((houseCharacter)=> houseCharacter.house === filterSelect);



  return (
    <div className="App">
      <header>
       <img src={Logo} alt="Harry Potter Logo" /> 
      </header>

      <main>
        <Filters filterName={filterName} handleFilter={handleFilter} select={filterSelect} />


        <CharactersList characters={filteredCharacter} />
      </main>
    </div>
  );
}

export default App;
