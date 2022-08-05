import React from 'react';
import Button from '../components/Button';
import UserInput from '../components/UserInput';

const Form = ({ onSubmit, nameValue, nameOnChange, numberValue, numberOnChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <UserInput
      text='name:' 
      value={nameValue} 
      onChange={nameOnChange} />
      <UserInput 
      text='number:' 
      value={numberValue} 
      onChange={numberOnChange} />
      <Button type="submit" text="add" />
    </form>
  )
}

export default Form;