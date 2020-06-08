import React, { useState } from 'react';
import TodoItem from './components/TodoItem/index.js';

import './styles/index.css';

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
      console.log(todoItems);
      setItem('');
      return setCount(count + 1);
    };
  };

  return (
    <div className='container' >
      <h1>You've got {count} things to do!</h1>
      <input 
        type='text'
        name='todo' 
        value={item}
        placeholder='What do you need to do?'
        onChange={event => setItem(event.target.value)}
        onKeyPress={handleKeyPress} 
        />
      <div>
        {todoItems.map(item => <TodoItem title={item} />)}
      </div>
      <button className='deleteButton' onClick={() => setArray([])}>Delete all</button>
    </div>
  );
}

export default App;
