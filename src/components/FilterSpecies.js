const FilterSpecies = (props) => {
  const handleSelect = (ev) => {
    props.handleFilter({
      key: "species",
      value: ev.currentTarget.value,
    });
  };

  return (
    <>
      <label className="labelForm" htmlFor="species">
        Selecciona Especie:
      </label>
      <select
        className="inputForm"
        name="species"
        id="species"
        value={props.filterSpecies}
        onChange={handleSelect}
      >
        <option value="any">Cualquiera</option>
        <option value="human">Humano</option>
        <option value="half-giant">Gigante</option>
        <option value="werewolf">Licántropo</option>
        <option value="ghost">Fantasma</option>
      </select>
    </>
  );
};

export default FilterSpecies;
