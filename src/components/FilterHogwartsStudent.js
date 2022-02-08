const FilterHogwartsStudent = (props) => {
  const handleCheck = (ev) => {
    props.handleFilter({
      key: "student",
      value: ev.currentTarget.checked,
    });
  };

  return (
    <>
      <label htmlFor="student" className="labelForm">
        {props.filterHogwartsStudent
          ? "Estudiantes de Hogwarts"
          : "No Estudiantes de Hogwarts"}
      </label>
      <input
        className="inputForm"
        type="checkbox"
        name="student"
        id="student"
        onChange={handleCheck}
        checked={props.filterHogwartsStudent}
      />
    </>
  );
};

export default FilterHogwartsStudent;
