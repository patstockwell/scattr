import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Clap from './Clap'
import SpeechBubble from './SpeechBubble'
import { steelyBlue, royalPurple } from '../../utilities/constants'

const Icon = styled.div`
  display: inline-block;
  width: 20px;
`

const ItemPair = styled.div`
  width: 80px;
  display: inline-flex;
  align-items: center;
  color: ${steelyBlue};
  fill: currentColor;
  -o-user-select: none;
  user-select: none;

  &:hover {
    color: ${royalPurple};
  }
`

const NumberCount = styled.span`
  vertical-align: super;
  margin-left: 8px;
  font-size: 12px;
`

class PostActions extends Component {
  constructor() {
    super()
    this.state = {
      claps: 0,
    }
    this.clap = this.clap.bind(this)
  }

  clap() {
    this.setState(prevState => ({
      claps: (prevState.claps + 1)
    }))
  }

  render() {
    return (
      <div>
        <ItemPair onClick={this.clap}>
          <Icon>
            <Clap />
          </Icon>
          <NumberCount>{this.props.claps + this.state.claps}</NumberCount>
        </ItemPair>
        <ItemPair>
          <Icon>
            <SpeechBubble />
          </Icon>
          <NumberCount>{this.props.commentCount}</NumberCount>
        </ItemPair>
      </div>
    )
  }
}

PostActions.propTypes = {
  claps: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
}

export default PostActions
