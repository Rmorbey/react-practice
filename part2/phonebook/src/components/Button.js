import React from 'react';

const Button = ( { type, text, onClick }) => {
  return (
    <div>
      <button onClick={onClick} type={type}>{text}</button>
    </div>
  )
}

export default Button;