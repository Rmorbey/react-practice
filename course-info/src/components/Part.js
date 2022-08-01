const Part = (props) => {
  console.log("part props:", props)
  return <p>{props.part.name} {props.part.exercises}</p>
}

export default Part;