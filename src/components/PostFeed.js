import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Post from './Post'

const FeedWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const PostFeed = (props) => {
  const posts = props.posts.map(post => (
    <Post
      key={post.id}
      firstName={post.firstName}
      lastName={post.lastName}
      profileImage={post.profileImage}
      postContent={post.postContent}
      claps={post.claps}
      comments={post.comments}
      tags={post.tags}
      clapOnce={props.clapOnce}
    />
  ))

  return (
    <FeedWrapper>
      {posts}
    </FeedWrapper>
  )
}

PostFeed.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  clapOnce: PropTypes.func.isRequired
}

export default PostFeed
