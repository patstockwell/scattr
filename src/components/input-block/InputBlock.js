import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lightGrey, seaGreen, hoverSuperLightGrey } from '../../utilities/constants'
import NewPostField from './NewPostField'
import TagsField from './TagsField'
import { Tag } from '../TagList'

// refactor this component into parts
// create a tag input element (stackoverflow)

const SubmitButton = styled.input`
    outline: none;
    background-color: ${seaGreen};
    color: white;
    font-weight: bold;
    border-radius: 5px;
    width: 100px;
    margin: 10px 0px;
    border: 1px solid ${lightGrey};
    padding: 8px 12px;
`

const FormWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const TagsBlock = styled.div`
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

class InputBlock extends Component {
  constructor() {
    super()
    this.state = {
      postInputFieldValue: '',
      tagsInputFieldValue: '',
      tags: [],
    }
    this.handlePostInput = this.handlePostInput.bind(this)
    this.handleTagsInput = this.handleTagsInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTagsInput(event) {
    event.preventDefault()
    const newTag = event.target.value
    const lastLetter = event.target.value.slice(-1)
    if (lastLetter === ' ' && event.target.value.length === 1) {
      // reset input when only white space
      this.setState({
        tagsInputFieldValue: '',
      })
    } else if (lastLetter === ' ') {
      // save new word and reset
      this.setState(prevState => ({
        tagsInputFieldValue: '',
        tags: [...prevState.tags, newTag]
      }))
    } else {
      this.setState({
        // update input field
        tagsInputFieldValue: event.target.value,
      })
    }
  }

  handlePostInput(event) {
    event.preventDefault()
    this.setState({
      postInputFieldValue: event.target.value,
    })
  }

  handleSubmit(event) {
    // handle input when empty?
    event.preventDefault()
    // clear state
    this.setState({
      postInputFieldValue: '',
      tagsInputFieldValue: '',
      tags: [],
    })
    this.props.createPost(this.state.postInputFieldValue, this.state.tags)
  }

  render() {
    const placeholderText = 'Tags'
    const placeholder = this.state.tags.length > 0 ? '' : placeholderText
    const tags = this.state.tags.map(tag => (
      <TagWrapper>
        <Tag>{tag}</Tag>
      </TagWrapper>
    ))
    return (
      <FormWrapper>
        <form onSubmit={this.handleSubmit} >
          <NewPostField
            postInputFieldValue={this.state.postInputFieldValue}
            handlePostInput={this.handlePostInput}
          />
          <TagsBlock>
            {tags}
            <TagsField
              tags={this.state.tags}
              tagsInputFieldValue={this.state.tagsInputFieldValue}
              handleTagsInput={this.handleTagsInput}
              placeholder={placeholder}
            />
          </TagsBlock>
          <SubmitButton type="submit" value="Post" />
        </form>
      </FormWrapper>
    )
  }
}

InputBlock.propTypes = {
  createPost: PropTypes.func.isRequired,
}

export default InputBlock
