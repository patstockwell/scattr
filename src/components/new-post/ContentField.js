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
    width: 292px;
    border: 1px solid ${lightGrey};
    padding: 8px 16px;
    margin: 10px 0;
`

const ContentField = props => (
  <TextInput
    required
    type="text"
    value={props.contentInputFieldValue}
    onChange={props.handleContentInput}
    placeholder="Plant an idea..."
  />
)

ContentField.propTypes = {
  contentInputFieldValue: PropTypes.string.isRequired,
  handleContentInput: PropTypes.func.isRequired,
}

export default ContentField
