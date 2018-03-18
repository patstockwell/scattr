import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TagList from './TagList'
import PostDetails from './PostDetails'
import { lightGrey, boxShadow } from '../utilities/constants'

const PostTile = styled.div`
  border: solid 1px ${lightGrey}; 
  border-radius: 5px;
  padding: 12px 12px;
  margin-bottom: 10px;
  text-decoration: none;
  cursor: pointer;
  transition: all ease-in-out 200ms;

  &:link,
  &:visited {
    color: initial;
  }

  &:hover,
  &:active {
    box-shadow: 0px 5px 11px ${boxShadow};
  }
`

const PostContentAndDetails = styled.div`
  margin: 0px 10px;
`

const Title = styled.p`
  font-size: 0.9em;
  margin: 0px;
`

const Post = props => (
  <PostTile href="">
    <PostContentAndDetails>
      <Title>{props.title}</Title>
      <TagList tags={props.tags} />
      <PostDetails
        {...props}
      />
    </PostContentAndDetails>
  </PostTile>
)

Post.propTypes = {
  profileImage: PropTypes.node.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  claps: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  timestamp: PropTypes.number.isRequired,
}

export default Post
