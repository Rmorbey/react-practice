import Part from '../components/Part';
import React from 'react';

const Content = ({ course }) => {
  console.log("Content props:", course)
  return (
    <div>
      <Part part={course.parts[0]} />
      <Part part={course.parts[1]} />
      <Part part={course.parts[2]} />
      <Part part={course.parts[3]} />
    </div>
  )
}

export default Content;