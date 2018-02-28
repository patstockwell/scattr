import React from 'react'
import PropTypes from 'prop-types'
import Clap from './Clap'
import SpeechBubble from './SpeechBubble'

const PostActions = props => (
  <div>
    <Clap />
    <span>{props.claps}</span>
    <SpeechBubble />
    <span>{props.commentCount}</span>
  </div>
)

PostActions.propTypes = {
  claps: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
}

export default PostActions
