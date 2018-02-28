import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PostActions from './PostActions'
import { hoverSuperLightGrey, lightGrey } from '../utilities/constants'

const PostTile = styled.a`
  display: block;
  border: solid 1px ${lightGrey}; 
  border-radius: 5px;
  padding: 12px 12px;
  margin-bottom: 10px;
  text-decoration: none;
  &:link,
  &:visited {
    color: initial;
  }

  &:hover,
  &:active {
    background-color: ${hoverSuperLightGrey};
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
      <PostActions commentCount={props.comments.length} claps={props.claps} />
    </NameAndContent>
    {/* <Comments comments={props.comments} /> */}
  </PostTile>
)

Post.propTypes = {
  profileImage: PropTypes.node.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  postContent: PropTypes.string.isRequired,
  claps: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Post
