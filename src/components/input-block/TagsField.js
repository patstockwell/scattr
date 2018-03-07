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
`

// check to see if the tag has already been added
// create function for removing tags from the list
// stop the form from submitting if there is missing input
// add tagInput as a tag when form submits
const TagsField = props => (
  <TextInput
    type="text"
    value={props.tagsInputFieldValue}
    onChange={props.handleTagsInput}
    // placeholder="Add some tags, eg. 'decision-making', or 'REAio#30'"
    placeholder={props.placeholder}
  />
)

TagsField.propTypes = {
  tagsInputFieldValue: PropTypes.string.isRequired,
  handleTagsInput: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default TagsField
