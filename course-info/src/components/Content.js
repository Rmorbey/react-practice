import Part from '../components/Part';
import React from 'react';

const Content = ({ course }) => {
  console.log("Content props:", course)
  return (
    <>
      <div>
        {course.parts.map(part =>
          <Part key={part.id} part={part} />
       )}
      </div>
    </>
  )

}

export default Content;