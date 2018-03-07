import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PostActions from './post-actions/PostActions'
import TagList from './TagList'
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

const NameAndContent = styled.div`
  margin-left: 58px;
`

const ProfileImage = styled.img`
  max-width: 50px;
  max-height: 50px;
  border-radius: 50%;
  width: 100%;
  float: left;
  margin-top: 5px;
  margin-left: -58px;
  position: absolute;
`

const Text = styled.p`
  text-overflow: ellipsis;
  line-height: 20px;
  margin: 10px 0 0 0;
`

const Content = Text.extend`
  font-size: 14px;
`

const Name = Text.extend`
  font-size: 15px;
  font-weight: bold;
`

const Post = props => (
  <PostTile href="">
    <NameAndContent>
      <ProfileImage src={props.profileImage} alt={`${props.firstName} ${props.lastName}`} />
      <Name>{`${props.firstName} ${props.lastName}`}</Name>
      <Content>{props.postContent}</Content>
      <TagList tags={props.tags} />
      <PostActions
        commentCount={props.comments.length}
        claps={props.claps}
      />
    </NameAndContent>
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
}

export default Post
