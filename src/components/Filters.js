import "../styles/Filters.scss";
import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";
import FilterGender from "./FilterGender";
import FilterSpecies from "./FilterSpecies";
import HogwartsStudent from "./HogwartsStudent ";

const Filters = (props) => {
  const handleForm = (ev) => ev.preventDefault();

  return (
    <form onSubmit={handleForm} action="" className="form">
      <FilterName
        filterName={props.filterName}
        handleFilter={props.handleFilter}
      />

      <FilterHouse
        filterHouse={props.filterHouse}
        handleFilter={props.handleFilter}
      />

      <FilterGender
        filterGender={props.filterGender}
        handleFilter={props.handleFilter}
      />

      <FilterSpecies
        filterSpecies={props.filterSpecies}
        handleFilter={props.handleFilter}
      />

      <HogwartsStudent
        filterHogwartsStudent={props.filterHogwartsStudent}
        handleFilter={props.handleFilter}
      />
    </form>
  );
};

export default Filters;
