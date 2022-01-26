import "../styles/CharactersList.scss";
import Character from "./Character";

const CharactersList = (props) => {
  const character = props.characters.map((character, index) => {
    return (
      <li key={index} className="eachLi">
        <Character character={character} />
      </li>
    );
  });

  return (
    <section className="section">
      <h2 className="titleResults">Lista de resultados</h2>
      <ul className="list">{character}</ul>
    </section>
  );
};

export default CharactersList;
