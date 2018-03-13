import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
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
  margin-left: 10px;
`

const ProfileImage = styled.img`
  max-width: 22px;
  max-height: 22px;
  border-radius: 50%;
  width: 100%;
`

const Name = styled.p`
  text-overflow: ellipsis;
  line-height: 20px;
  margin: 0 10px 0 10px;
  font-size: 13px;
`

const MarkDownWrapper = styled.div`
  font-size: 0.8em;
  overflow-x: scroll;
`

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  min-width: 200px;
`

const Time = styled.p`
  margin: 0 10px;
  font-size: 13px;
`

const Post = props => (
  <PostTile href="">
    <NameAndContent>
      <MarkDownWrapper>
        <ReactMarkdown source={props.postContent} />
      </MarkDownWrapper>
      <TagList tags={props.tags} />
      <FlexDiv>
        <FlexDiv>
          <ProfileImage src={props.profileImage} alt={`${props.firstName} ${props.lastName}`} />
          <Name>{`by ${props.firstName} ${props.lastName}`}</Name>
          <Time>{moment(props.timestamp).fromNow()}</Time>
        </FlexDiv>
        <PostActions
          commentCount={props.comments.length}
          claps={props.claps}
        />
      </FlexDiv>
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
  timestamp: PropTypes.number.isRequired,

}

export default Post
