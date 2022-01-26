import "../styles/Filters.scss";
import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";
import FilterGender from "./FilterGender";

const Filters = (props) => {
  const handleForm = (ev) => ev.preventDefault();

  return (
    <form onSubmit={handleForm} action="" className="form">
      <FilterName
        filterName={props.filterName}
        handleFilter={props.handleFilter}
      />

      <FilterHouse
        filterSelect={props.filterSelect}
        handleFilter={props.handleFilter}
      />

      <FilterGender
        filterGender={props.filterGender}
        handleFilter={props.handleFilter}
      />
    </form>
  );
};

export default Filters;
