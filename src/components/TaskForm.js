import React from 'react';

export const TaskForm = ({ newTodo, onNewTodoChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <h2>Welcome todo app! Type new task below</h2>
      <textarea value={newTodo} onChange={onNewTodoChange} />
      <button type="submit">Submit Form!</button>
    </form>
  )
}