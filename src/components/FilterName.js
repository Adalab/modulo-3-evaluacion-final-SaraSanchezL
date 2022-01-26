const FilterName = (props) => {
  const handleInput = (ev) => {
    props.handleFilter({
      key: "name",
      value: ev.currentTarget.value,
    });
  };
  return (
    <>
      <label className="labelForm" htmlFor="name">
        Buscar por Nombre:
      </label>
      <input
        className="inputForm"
        type="text"
        name="name"
        id="name"
        placeholder="Buscar..."
        value={props.filterName}
        onChange={handleInput}
      />
    </>
  );
};

export default FilterName;
