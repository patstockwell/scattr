import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { hoverSuperLightGrey, lightGrey } from '../../utilities/constants'

const TextInput = styled.input`
    outline: none;
    background-color: ${hoverSuperLightGrey};
    border-radius: 5px;
    color: #14171a;
    display: block;
    font-size: 12px;
    height: 32px;
    line-height: 16px;
    width: 300px;
    border: 1px solid ${lightGrey};
    padding: 8px 12px;
`

const NewPostField = props => (
  <TextInput
    type="text"
    value={props.postInputFieldValue}
    onChange={props.handlePostInput}
    placeholder="Plant an idea..."
  />
)

NewPostField.propTypes = {
  postInputFieldValue: PropTypes.string.isRequired,
  handlePostInput: PropTypes.func.isRequired,
}

export default NewPostField
