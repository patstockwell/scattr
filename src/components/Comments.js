import React from 'react'

const Comments = ({ comments }) => (
  comments.map(comment => (
    <div key={comment.id}>
      <p>{comment.name}</p>
      <p>{comment.content}</p>
    </div>
  ))
)

export default Comments
