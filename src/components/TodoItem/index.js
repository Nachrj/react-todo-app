import React from 'react';

import './TodoItem.css';

const TodoItem = (props) => {
  return (
    <div>
      <a>{props.title}</a>
    </div>
  )
}

export default TodoItem