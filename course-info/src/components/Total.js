import React from 'react';

const Total = ({ course }) => {
  console.log("Total props:", course)
  return <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises + course.parts[3].exercises}</p>
}

export default Total;