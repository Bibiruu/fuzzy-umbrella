/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import moment from 'moment'

export const Details = ({ task }) => {
  const [likeCount, setLikeCount] = useState(task.hearts)

  const changeLike = ()
  return (
    <>
      <img onClick={() => changeLike(task._id)} className="Heart-Icon m-2" src="https://img.icons8.com/tiny-color/16/000000/like.png" alt="Heart-Icon" />
      <span>x {likeCount}</span>
      <p title={moment(task.createdAt).format('DD-MM-YYYY hh:mm:ss')}>{moment(task.createdAt).fromNow()}</p>
    </>
  )
}