import React from 'react';
import Button from '../components/Button';

const Form = () => {
  return (
    <form>
      <div>
        name: <input />
      </div>
      <Button type="submit" text="add" />
    </form>
  )
}

export default Form;