import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import TagsField from './TagsField'
import XRemoveIcon from './XRemoveIcon'
import { Tag } from '../TagList'
import { hoverSuperLightGrey, lightGrey, midGrey } from '../../utilities/constants'

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
  width: 600px;
  box-sizing: border-box;
`

const TagWrapper = styled.div`
  display: flex;
  margin: 4px;
  fill: ${midGrey};
  cursor: default;
`

const XRemoveIconWrapper = styled.div`
  width: 9px;
  margin-top: 3px;
  margin-left: 2px;
  cursor: pointer;
`


const TagsBlock = ({
  removeTag,
  tags,
  tagsInputFieldValue,
  handleTagsInput,
}) => {
  const placeholderText = 'Tags'
  const placeholder = tags.length > 0 ? '' : placeholderText
  const renderedTags = tags.map(tag => (
    <TagWrapper key={tag} >
      <Tag >
        {tag}
      </Tag>
      <XRemoveIconWrapper onClick={() => { removeTag(tag) }}>
        <XRemoveIcon />
      </XRemoveIconWrapper>
    </TagWrapper>
  ))
  return (
    <InputWrapper>
      {renderedTags}
      <TagsField
        tags={tags}
        tagsInputFieldValue={tagsInputFieldValue}
        handleTagsInput={handleTagsInput}
        placeholder={placeholder}
      />
    </InputWrapper>
  )
}

TagsBlock.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  tagsInputFieldValue: PropTypes.string.isRequired,
  handleTagsInput: PropTypes.func.isRequired,
  removeTag: PropTypes.func.isRequired,
}

export default TagsBlock
