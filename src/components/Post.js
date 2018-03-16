import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import TagList from './TagList'
import PostDetails from './PostDetails'
import { hoverSuperLightGrey, lightGrey, boxShadow } from '../utilities/constants'

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
    background-color: ${hoverSuperLightGrey};
    box-shadow: 0px 5px 11px ${boxShadow};
  }
`

const PostContentAndDetails = styled.div`
  margin: 0px 10px;
`

// these rules target the markdown content
// they hide all but the first line of text.
const MarkDownWrapper = styled.div`
  font-size: 0.8em;
  overflow-x: scroll;
  p, h1, h2, h3, h4, h5, h6, li, a, pre, code {
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 400;
    font-size: 14px;
  }
`

const Post = props => (
  <PostTile href="">
    <PostContentAndDetails>
      <MarkDownWrapper>
        <ReactMarkdown source={props.postContent} />
      </MarkDownWrapper>
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
  postContent: PropTypes.string.isRequired,
  claps: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  timestamp: PropTypes.number.isRequired,
}

export default Post
