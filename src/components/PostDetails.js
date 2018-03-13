import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import PostActions from './post-actions/PostActions'

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  min-width: 200px;
`

const Time = styled.p`
  margin: 0 10px;
  font-size: 13px;
`

const Name = styled.p`
  text-overflow: ellipsis;
  line-height: 20px;
  margin: 0 10px 0 10px;
  font-size: 13px;
`

const ProfileImage = styled.img`
  max-width: 22px;
  max-height: 22px;
  border-radius: 50%;
  width: 100%;
`

const PostDetails = props => (
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
)

PostDetails.propTypes = {
  profileImage: PropTypes.node.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  claps: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  timestamp: PropTypes.number.isRequired,
}

export default PostDetails
