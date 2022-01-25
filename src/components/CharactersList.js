import Character from "./Character";

const CharactersList = (props) => {
  const character = props.characters.map((character, index) => {
    return (
      <li key={index}>
        <Character character={character} />
      </li>
    );
  });

  return (
    <section>
      <ul>{character}</ul>
    </section>
  );
};

export default CharactersList;
