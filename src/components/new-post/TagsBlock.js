import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import TagsField from './TagsField'
import { Tag } from '../TagList'
import { hoverSuperLightGrey, lightGrey } from '../../utilities/constants'

const InputWrapper = styled.div`
  background-color: ${hoverSuperLightGrey};
  border-radius: 5px;
  font-size: 12px;
  min-height: 32px;
  line-height: 16px;
  width: 300px;
  border: 1px solid ${lightGrey};
  padding: 8px 12px;
  display: flex;
  flex-flow: wrap;
  align-items: center;
`

const TagWrapper = styled.p`
  margin: 4px 0px;
`

const TagsBlock = (props) => {
  const placeholderText = 'Tags'
  const placeholder = props.tags.length > 0 ? '' : placeholderText
  const tags = props.tags.map(tag => (
    <TagWrapper key={tag} >
      <Tag >
        {tag}
      </Tag>
    </TagWrapper>
  ))
  return (
    <InputWrapper>
      {tags}
      <TagsField
        tags={props.tags}
        tagsInputFieldValue={props.tagsInputFieldValue}
        handleTagsInput={props.handleTagsInput}
        placeholder={placeholder}
      />
    </InputWrapper>
  )
}

TagsBlock.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  tagsInputFieldValue: PropTypes.string.isRequired,
  handleTagsInput: PropTypes.func.isRequired,
}

export default TagsBlock
