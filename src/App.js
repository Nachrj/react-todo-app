import React, { useState } from 'react';

const App = () => {

  const todoItems = [
  
  ];
  
  const handleKeyPress = event => {
    //setCount(count + 1);
    if (event.key === 'Enter') {
      todoItems.push(item);
      console.log(todoItems)
    }
  };

  const [item, setItem] = useState('');
  //const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <h1>You've got things to do!</h1>
      <input 
        type='text'
        name='todo' 
        placeholder='What do you need to do?'
        onChange={event => setItem(event.target.value)}
        onKeyPress={handleKeyPress} 
        />
      <div>
        {todoItems.map(item => <li>{item}</li>)}
      </div>
    </React.Fragment>
  );
}

export default App;
