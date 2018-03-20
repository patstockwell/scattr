import React from 'react'
import PropTypes from 'prop-types'
import PostFeed from '../components/PostFeed'
import InputBlock from '../components/input-block/InputBlock'

const Home = ({ createPost, posts }) => (
  <div>
    <InputBlock createPost={createPost} />
    <PostFeed posts={posts} />
  </div>
)

Home.propTypes = {
  createPost: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Home
