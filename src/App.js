import React, { useState } from 'react';

const App = () => {

  /* setArray is used to update the array and 
  render it in the todoItems.map */
  const [todoItems, setArray] = useState([]);
  const [item, setItem] = useState('');
  const [count, setCount] = useState(0);
  
  const handleKeyPress = event => {
    //setCount(count + 1);
    if (event.key === 'Enter') {
      setArray([...todoItems, item]);
      console.log(todoItems)
      return setCount(count + 1);
    };
  };

  return (
    <React.Fragment>
      <h1>You've got {count} things to do!</h1>
      <input 
        type='text'
        name='todo' 
        placeholder='What do you need to do?'
        onChange={event => setItem(event.target.value)}
        onKeyPress={handleKeyPress} 
        />
      <ul>
        {todoItems.map(item => <li>{item}</li>)}
      </ul>
    </React.Fragment>
  );
}

export default App;
