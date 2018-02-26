import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Clap from './Clap'
import SpeechBubble from './SpeechBubble'
import Comments from './Comments'
import { TenColumns, TwoColumns, ColumnLeftMargin } from '../utilities/layout'

const ProfileImage = styled.img`
  max-width: 50px;
  max-height: 50px;
  border-radius: 50%;
  width: 100%;
`

const NameAndContent = styled.div`
  display: inline-block;
  width: ${TenColumns};
  margin-left: ${ColumnLeftMargin};
`

const ImageColumn = styled.div`
  display:inline-block;
  width: ${TwoColumns};
`

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`

const Post = props => (
  <div>
    <FlexDiv>
      <ImageColumn>
        <ProfileImage className="post-profile-picture" src={props.profileImage} alt={`${props.firstName} ${props.lastName}`} />
      </ImageColumn>
      <NameAndContent>
        <p className="post-full-name">{`${props.firstName} ${props.lastName}`}</p>
        <p className="post-content">{props.postContent}</p>
      </NameAndContent>
    </FlexDiv>
    <Clap />
    <span>{props.claps}</span>
    <SpeechBubble />
    <span>{props.comments.length}</span>
    <Comments comments={props.comments} />
  </div>
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
