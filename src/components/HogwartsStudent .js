const HogwartsStudent = (props) => {

  const handleCheck = (ev) => {
    props.handleFilter({
      key : "student",
      value: ev.currentTarget.checked
    })
  }


return (
  <>
<label htmlFor="student">Estudiante</label>
  <input type="checkbox" name="student" id="student" onChange={handleCheck} checked={props.filterHogwartsStudent} />
</>

)
}

export default HogwartsStudent;