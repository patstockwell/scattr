import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Clap from './Clap'
import SpeechBubble from './SpeechBubble'
import { steelyBlue, salmon } from '../../utilities/constants'

const Icon = styled.div`
  display: inline-block;
  width: 20px;
`

const ItemPair = styled.div`
  width: 80px;
  display: inline-block;
  color: ${steelyBlue};
  fill: currentColor;

  &:hover {
    color: ${salmon};
  }
`

const NumberCount = styled.span`
  vertical-align: super;
  margin-left: 8px;
  font-size: 12px;
`


const PostActions = (props) => {
  const clap = () => {
    props.clapOnce(123)
  }

  return (
    <div>
      <ItemPair onClick={clap}>
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
}

PostActions.propTypes = {
  claps: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  clapOnce: PropTypes.func.isRequired
}

export default PostActions
