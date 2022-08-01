const Total = (props) => {
  console.log("Total props:", props)
  return <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
}

export default Total;