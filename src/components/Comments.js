import React from 'react'

const Comments = props => (
  props.comments.map(comment => (
    <div>
      <p>{comment.name}</p>
      <p>{comment.content}</p>
    </div>
  ))
)

export default Comments
