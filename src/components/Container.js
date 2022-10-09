import React, { useState, useEffect } from 'react';

import { TaskList } from './TaskList';// import thought list
import { NewThought } from './NewThought';// import the input

export const Container = () => {
  const [thoughtList, setThoughtList] = useState([]);// usestate for empty array
  const [loading, setLoading] = useState(false);// loading check
  const [newThought, setNewThought] = useState('');// setting new thought for empty string

  const fetchTasks = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughtList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  const appendThought = (thought) => { // create a new thought
    setThoughtList((current) => [thought, ...current]); // list form appending new to old
  }

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    fetchTasks();
  }, []);// needing the square brackets for listening to the mount

  const handleNewTodoChange = (event) => { // taking a value and setting the thought for submission
    setNewThought(event.target.value)
  }

  const onFormSubmit = async (event) => { // prevention of rerender
    event.preventDefault();

    const options = { // creating a thought
      method: 'POST', // posting it to the request
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newThought
      })
    }

    appendThought(await fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options) // adding options after api, for post req.
      .then((res) => {
        return res.json()
      })
      .finally(() => setNewThought('')))
  }

  return (
    <div>
      <NewThought
        newThought={newThought}// the text box input
        onNewTodoThought={handleNewTodoChange}// new thought portrayed
        onFormSubmit={onFormSubmit} />
      <TaskList
        loading={loading}
        thoughtList={thoughtList}
        setThoughtList={setThoughtList} />
    </div>

  );
}
