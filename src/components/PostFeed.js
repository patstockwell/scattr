import React from 'react'
import Post from './Post'

const PostFeed = props => (
  props.posts.map(post => (
    <Post
      key={post.id}
      firstName={post.firstName}
      lastName={post.lastName}
      profileImage={post.profileImage}
      postContent={post.postContent}
      claps={post.claps}
      comments={post.comments}
    />
  ))
)

export default PostFeed
