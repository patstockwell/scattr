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
  margin-left: 10px;
`

const MarkDownWrapper = styled.div`
  font-size: 0.8em;
  overflow-x: scroll;
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
