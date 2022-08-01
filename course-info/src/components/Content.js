import Part from '../components/Part';

const Content = (props) => {
  console.log("Content props:", props)
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

export default Content;