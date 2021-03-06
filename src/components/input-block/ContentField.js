import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { hoverSuperLightGrey, lightGrey } from '../../utilities/constants'

const TextInput = styled.textarea`
    outline: none;
    background-color: ${hoverSuperLightGrey};
    border-radius: 5px;
    color: #14171a;
    display: block;
    font-size: 12px;
    height: 50px;
    width: 600px;
    box-sizing: border-box;
    line-height: 16px;
    border: 1px solid ${lightGrey};
    padding: 14px 16px;
    margin: 10px 0;
    resize: vertical;
    transition: ease-in-out 200ms all;
`

class ContentField extends Component {
  constructor() {
    super()
    this.state = {
      focusTextArea: false,
    }
    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }

  onFocus() {
    this.setState({
      focusTextArea: true,
    })
  }

  onBlur() {
    this.setState({
      focusTextArea: false,
    })
  }

  render() {
    const { contentInputFieldValue, handleContentInput } = this.props
    const { focusTextArea } = this.state
    const style = focusTextArea || contentInputFieldValue ? { height: '140px' } : { height: '50px' }

    return (
      <TextInput
        style={style}
        required
        type="text"
        value={contentInputFieldValue}
        onChange={handleContentInput}
        placeholder="Plant an idea..."
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      />
    )
  }
}


ContentField.propTypes = {
  contentInputFieldValue: PropTypes.string.isRequired,
  handleContentInput: PropTypes.func.isRequired,
}

export default ContentField
