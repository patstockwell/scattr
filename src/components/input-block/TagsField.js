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
    height: 32px;
    line-height: 16px;
    width: 300px;
    border: 1px solid ${lightGrey};
    padding: 8px 12px;
`

// check to see if the tag has already been added
// create function for removing tags from the list
// the tag array might live in the parent component
// stop the form from submitting if there is no missing input
const TagsField = props => (
  <TextInput
    type="text"
    value={props.tagsInputFieldValue}
    onChange={props.handleTagsInput}
    placeholder="Add some tags, eg. 'decision-making', or 'REAio#30'"
  />
)

TagsField.propTypes = {
  tagsInputFieldValue: PropTypes.string.isRequired,
  handleTagsInput: PropTypes.func.isRequired,
}

export default TagsField
