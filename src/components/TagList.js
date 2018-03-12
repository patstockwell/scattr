import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { salmon, papayawhip, royalPurple } from '../utilities/constants'

const List = styled.div`
  margin: 6px 0px;
`

export const Tag = styled.a`
  font-size: 10px;
  color: ${salmon};
  -webkit-text-decoration: none;
  text-decoration: none;
  padding: 2px 6px 3px;
  border-radius: 3px;
  background-color: ${papayawhip};
`

const TagWithHover = Tag.extend`
  margin: 0 2px;

  &:hover,
  &:active {
    color: ${royalPurple}
  }
`

const TagList = props => (
  <List>
    {props.tags.map(tag => (
      <TagWithHover href={`#${tag}`} key={tag}>{tag}</TagWithHover>
    ))}
  </List>
)

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default TagList
