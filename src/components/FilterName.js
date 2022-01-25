
const FilterName = (props) => {

  const handleInput = (ev) => {
    props.handleFilter ({
      key: 'name',
      value: ev.currentTarget.value
    })
  }
  return (
    <>
    <label htmlFor="name">Buscar por Nombre:</label>
    <input type="text" name="name" id="name" placeholder="Buscar..." value={props.filterName} onChange={handleInput} />
    </>
  )
}

export default FilterName;