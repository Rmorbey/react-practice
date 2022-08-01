const Part = (props) => {
  console.log("part props:", props)
  return <p>{props.part} {props.exercises}</p>
}

export default Part;