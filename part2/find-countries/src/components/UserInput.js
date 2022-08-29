import React from 'react';

const UserInput = ({ text, value, onChange}) => {
  return <div>{text} <input value={value} onChange={onChange} /></div>
}

export default UserInput;