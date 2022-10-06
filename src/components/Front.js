import React, { useState, useEffect } from 'react';

import { TaskList } from 'components/TaskList';// import thought list
import { NewThought } from 'components/NewThought';// import the input

export const Front = () => {
  const [thoughtList, setThoughtList] = useState([]);// usestate for empty array
  const [loading, setLoading] = useState(false);// loading check
  const [newThought, setNewThought] = useState('');// setting new thought for empty string

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    setLoading(true);
    fetch('https://week7-backend.herokuapp.com/tasks')
      .then((res) => res.json())
      .then((data) => setThoughtList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  const handleNewTodoChange = (event) => { // taking a value and setting the thought for submission
    setNewThought(event.target.value)
  }

  const onFormSubmit = (event) => { // prevention of rerender
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description: newThought
      })
    }

    fetch('https://week7-backend.herokuapp.com/tasks', options)
      .then((res) => res.json())
      .then(() => fetchTasks())
      .finally(() => setNewThought(''));
  }

  return (
    <div>
      <NewThought
        newThought={newThought}// the text box input
        onNewTodoThought={handleNewTodoChange}// taking the thought
        onFormSubmit={onFormSubmit} />
      <TaskList
        loading={loading}
        thoughtList={thoughtList}
        setThoughtList={setThoughtList} />
    </div>

  );
}