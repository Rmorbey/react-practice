import React from 'react';

const Header = ({ course }) => {
  console.log("Header props:", course)
  return <h1>{course.name}</h1>
}

export default Header;