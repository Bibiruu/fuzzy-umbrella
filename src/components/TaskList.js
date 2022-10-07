import React from 'react';
import { formatRelative } from 'date-fns'

export const TaskList = ({ loading, thoughtList, setThoughtList }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }

  const onTaskCheckChange = (task) => {
    setThoughtList((thoughtList) => thoughtList.map((singleTask) => {
      if (singleTask._id === task._id) {
        return {
          ...singleTask, isChecked: !singleTask.isChecked
        };
      }
      return singleTask;
    }));
  }

  return (
    <section>
      {thoughtList.reverse().map((task) => (
        <div className="thoughtCard" key={task._id}>
          <h4>{task.description}</h4>
          <input onChange={() => onTaskCheckChange(task)} type="checkbox" checked={task.isChecked} />
          <p>{formatRelative(task.date, new Date())}</p>
        </div>
      ))}
    </section>
  );
}