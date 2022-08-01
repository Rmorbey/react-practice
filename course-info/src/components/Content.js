import Part from '../components/Part';

const Content = (props) => {
  console.log("Content props:", props)
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

export default Content;