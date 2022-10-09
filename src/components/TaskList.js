import React from 'react';
import { Details } from './Details';

export const TaskList = ({ loading, thoughtList }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }

  return (
    <section>
      {thoughtList.map((task) => (
        // eslint-disable-next-line no-underscore-dangle
        <div className="thoughtCard" key={task._id}>
          <h4 className="chat-thought m-4">{task.message}</h4>
          <Details task={task} />
        </div>
      ))}
    </section>
  );
}