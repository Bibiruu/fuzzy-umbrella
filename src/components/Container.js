import React, { useState, useEffect } from 'react';

import { TaskList } from 'components/TaskList';// import thought list
import { NewThought } from 'components/NewThought';// import the input

// const likeApi = (likeId) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${likeId}/like`

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

  const appendThought = (thought) => {
    setThoughtList((current) => [thought, ...current]);
  }

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    fetchTasks();
  }, []);// needing the square brackets for listening to the mount

  const handleNewTodoChange = (event) => { // taking a value and setting the thought for submission
    setNewThought(event.target.value)
  }

  const onFormSubmit = (event) => { // prevention of rerender
    event.preventDefault();

    const options = { // creating a thought
      method: 'POST', // post request
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newThought
      })
    }

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options) // adding options after api, for post req.
      .then((res) => {
        appendThought(res.json())
      })
      .finally(() => setNewThought(''))
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
