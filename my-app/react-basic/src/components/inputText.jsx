import React, {useState} from 'react';

const TextInput = () => {
  const [name, setName] = useState('');

  const handleName = (event) => {
    setName(event.target.value);
  }

  return (
    <div>
      <input
        onChange={(event) => handleName(event)}
        type={'text'}
      />
    <p>{name}</p>
    </div>
  );
};

export default TextInput;