import FilterName from './FilterName';
import FilterHouse from './FilterHouse';

const Filters = (props) => {

  const handleForm = (ev) => ev.preventDefault();

  return (

    <form onSubmit={handleForm}  action="">

    <FilterName filterName={props.filterName} handleFilter={props.handleFilter}/>

    <FilterHouse select={props.filterSelect} handleFilter={props.handleFilter} />

    </form>
  )
}

export default Filters;