import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import crypto from 'crypto'
import Post from './Post'

const FeedWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const PostFeed = ({ posts }) => {
  const renderedPosts = posts.map(post => (
    <Post
      key={crypto.randomBytes(256)}
      {...post}
    />
  ))

  return (
    <FeedWrapper>
      {renderedPosts}
    </FeedWrapper>
  )
}

PostFeed.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PostFeed
