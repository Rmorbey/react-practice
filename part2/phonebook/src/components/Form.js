import React from 'react';
import Button from '../components/Button';

const Form = ({ onSubmit, nameValue, nameOnChange, numberValue, numberOnChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>name: <input value={nameValue} onChange={nameOnChange} /></div>
      <div>number: <input value={numberValue} onChange={numberOnChange} /></div>
      <Button type="submit" text="add" />
    </form>
  )
}

export default Form;