import React from 'react';
import moment from 'moment'

export const TaskList = ({ loading, thoughtList }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }

  return (
    <section>
      {thoughtList.map((task) => (
        // eslint-disable-next-line no-underscore-dangle
        <div className="thoughtCard" key={task._id}>
          <h4>{task.message}</h4>
          <p title={moment(task.createdAt).format('DD-MM-YYYY hh:mm:ss')}>{moment(task.createdAt).fromNow()}</p>
        </div>
      ))}
    </section>
  );
}