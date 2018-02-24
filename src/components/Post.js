import React from 'react'
import PropTypes from 'prop-types'
import Clap from './Clap'
import SpeechBubble from './SpeechBubble'
import Comments from './Comments'

const Post = props => (
  <div>
    <img className="post-profile-picture" src={props.profileImage} alt={`${props.firstName} ${props.lastName}`} />
    <p className="post-full-name">{`${props.firstName} ${props.lastName}`}</p>
    <p className="post-content">{props.postContent}</p>
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
