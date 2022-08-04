import React from 'react';

const Part = ({ part }) => {
  console.log("part props:", part)
  return <p>{part.name} {part.exercises}</p>
}

export default Part;