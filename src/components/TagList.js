import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { salmon } from '../utilities/constants'

const List = styled.div`
  margin: 6px 0px;
`

const Tag = styled.a`
  font-size: 10px;
  color: ${salmon};
  -webkit-text-decoration: none;
  text-decoration: none;
  margin: 0 2px;
  padding: 2px 6px 3px;
  border-radius: 3px;
  background-color: papayawhip;
`

const TagList = props => (
  <List>
    {props.tags.map(tag => (
      <Tag href={`#${tag}`} key={tag}>{tag}</Tag>
    ))}
  </List>
)

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default TagList
