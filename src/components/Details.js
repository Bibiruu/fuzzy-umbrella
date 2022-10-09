/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// getting the heart likes and establisihing time stamp

import React, { useState } from 'react'
import moment from 'moment' // importing time

export const Details = ({ task }) => {
  const [likeCount, setLikeCount] = useState(task.hearts) //  hearts api stored to the likeCount

  const changeLike = (id) => { // creating a thought
    const options = {
      method: 'POST', // post request
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, options) // adding options after api, for post req.
      .then((res) => {
        // eslint-disable-next-line max-len
        if (res.status === 200) { // 200 Standard response for successful HTTP requests.
          setLikeCount(likeCount + 1) // count set
        }
      })
  }
  return (
    <div className="detail-container">
      <img onClick={() => changeLike(task._id)} className="heart-icons m-3 rounded-full hover:bg-pink-300 active:bg-pink-400 focus:outline-none focus:ring focus:ring-pink-300 " src="https://img.icons8.com/tiny-color/16/000000/like.png" alt="heart-icons" />
      <span className="counter">x {likeCount}</span>
      <p className="time-stamp" title={moment(task.createdAt).format('DD-MM-YYYY hh:mm:ss')}>{moment(task.createdAt).fromNow()}</p>
    </div>
  )
}