import React from 'react';

const Total = ({ course }) => {
  const total = course.parts.reduce((previousValue, currentValue) => previousValue + currentValue.exercises, 0)
  console.log("Total props:", course)
  return <p><b>total of {total} exercises</b></p>
}

export default Total;