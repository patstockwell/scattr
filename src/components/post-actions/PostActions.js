import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Clap from './Clap'
import SpeechBubble from './SpeechBubble'
import { steelyBlue } from '../../utilities/constants'

const Icon = styled.div`
  display: inline-block;
  width: 20px;
`

const ItemPair = styled.div`
  width: 80px;
  display: inline-block;
  color: ${steelyBlue};
  fill: currentColor;
`

const NumberCount = styled.span`
  vertical-align: super;
  margin-left: 8px;
  font-size: 12px;
`

const PostActions = props => (
  <div>
    <ItemPair>
      <Icon>
        <Clap />
      </Icon>
      <NumberCount>{props.claps}</NumberCount>
    </ItemPair>
    <ItemPair>
      <Icon>
        <SpeechBubble />
      </Icon>
      <NumberCount>{props.commentCount}</NumberCount>
    </ItemPair>
  </div>
)

PostActions.propTypes = {
  claps: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
}

export default PostActions
