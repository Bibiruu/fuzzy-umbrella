import React from 'react';

export const NewThought = ({ newThought, onNewTodoThought, onFormSubmit }) => {
  return (
    <form className="form border-solid" onSubmit={onFormSubmit}>
      <h4 className="m-4">Whats making you happy right now?</h4>
      <textarea className="input m-5 w-5/6" value={newThought} onChange={onNewTodoThought} />
      <button className="button m-5 rounded-full" type="submit">
        <img className="Heart-Icon m-2" src="https://img.icons8.com/tiny-color/16/000000/like.png" alt="Heart-Icon" />
        <div className="button-text">Send Happy Thought</div>
        <img className="Heart-Icon m-2" src="https://img.icons8.com/tiny-color/16/000000/like.png" alt="Heart-Icon" />
      </button>
    </form>
  )
}
