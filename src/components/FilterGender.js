const FilterGender = (props) => {
  const handleSelect = (ev) => {
    props.handleFilter({
      key: "gender",
      value: ev.currentTarget.value,
    });
  };

  return (
    <>
      <label className="labelForm" htmlFor="gender">
        Selecciona Género:
      </label>
      <select
        className="inputForm"
        name="gender"
        id="gender"
        value={props.filterGender}
        onChange={handleSelect}
      >
        <option value="all">Todos</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre</option>
      </select>
    </>
  );
};

export default FilterGender;
