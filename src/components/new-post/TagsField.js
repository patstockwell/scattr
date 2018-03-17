import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TextInput = styled.input`
    outline: none;
    background-color: #F7F9F9;
    color: #14171a;
    font-size: 12px;
    height: 100%;
    line-height: 16px;
    border: transparent;
    padding: 9px 4px;
    flex-grow: 1;
    width: 40px;
`

const TagsField = ({
  removeLastTag,
  tagsInputFieldValue,
  handleTagsInput,
  placeholder,
}) => {
  const handleKeyDown = (event) => {
    const backSpaceKeycode = 8
    const keyPressed = event.keyCode
    if (
      keyPressed === backSpaceKeycode &&
      !tagsInputFieldValue &&
      !event.repeat
    ) {
      removeLastTag()
    }
  }

  return (
    <TextInput
      type="text"
      value={tagsInputFieldValue}
      onChange={handleTagsInput}
      placeholder={placeholder}
      onKeyDown={handleKeyDown}
    />
  )
}

TagsField.propTypes = {
  tagsInputFieldValue: PropTypes.string.isRequired,
  handleTagsInput: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  removeLastTag: PropTypes.func.isRequired,
}

export default TagsField
