import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TagsBlock from './TagsBlock'
import { lightGrey, seaGreen } from '../../utilities/constants'
import ContentField from './ContentField'
import { addToSet } from '../../utilities/functions'

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

class NewPost extends Component {
  constructor() {
    super()
    this.state = {
      contentInputFieldValue: '',
      tagsInputFieldValue: '',
      tags: [],
    }
    this.handleContentInput = this.handleContentInput.bind(this)
    this.handleTagsInput = this.handleTagsInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.removeTag = this.removeTag.bind(this)
    this.removeLastTag = this.removeLastTag.bind(this)
  }

  handleTagsInput(event) {
    event.preventDefault()
    const newTagList = event.target.value.trim()
    const lastLetter = event.target.value.slice(-1)
    if (lastLetter === ' ' && event.target.value.length === 1) {
      // reset input when nothing but white space
      this.setState({
        tagsInputFieldValue: '',
      })
    } else if (lastLetter === ' ') {
      // add finished word to set
      this.setState(prevState => ({
        tagsInputFieldValue: '',
        tags: addToSet(prevState.tags, newTagList),
      }))
    } else {
      // continue adding letters
      this.setState({
        tagsInputFieldValue: event.target.value,
      })
    }
  }

  handleContentInput(event) {
    event.preventDefault()
    this.setState({
      contentInputFieldValue: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    // clear state
    this.props.createPost(this.state.contentInputFieldValue, Array.from(this.state.tags))
    this.setState({
      contentInputFieldValue: '',
      tagsInputFieldValue: '',
      tags: [],
    })
  }

  removeTag(tag) {
    this.setState((prevState) => {
      const tagSet = new Set(prevState.tags)
      tagSet.delete(tag)
      return {
        tags: Array.from(tagSet)
      }
    })
  }

  removeLastTag() {
    if (this.state.tags.length > 0) {
      this.setState(prevState => ({
        tags: prevState.tags.slice(0, -1)
      }))
    }
  }

  render() {
    return (
      <FormWrapper>
        <form onSubmit={this.handleSubmit} >
          <ContentField
            contentInputFieldValue={this.state.contentInputFieldValue}
            handleContentInput={this.handleContentInput}
          />
          <TagsBlock
            tags={Array.from(this.state.tags)}
            tagsInputFieldValue={this.state.tagsInputFieldValue}
            handleTagsInput={this.handleTagsInput}
            removeTag={this.removeTag}
            removeLastTag={this.removeLastTag}
          />
          <SubmitButton type="submit" value="Post" />
        </form>
      </FormWrapper>
    )
  }
}

NewPost.propTypes = {
  createPost: PropTypes.func.isRequired,
}

export default NewPost
