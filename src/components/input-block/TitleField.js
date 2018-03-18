import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { hoverSuperLightGrey, lightGrey } from '../../utilities/constants'

const TextInput = styled.input`
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
`

const TitleField = ({ titleInputFieldValue, handleTitleInput }) => (
  <TextInput
    value={titleInputFieldValue}
    onChange={handleTitleInput}
    placeholder="Plant an idea..."
  />
)

TitleField.propTypes = {
  titleInputFieldValue: PropTypes.string.isRequired,
  handleTitleInput: PropTypes.func.isRequired,
}

export default TitleField
