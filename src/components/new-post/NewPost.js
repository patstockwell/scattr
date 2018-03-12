import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TagsBlock from './TagsBlock'
import { lightGrey, seaGreen } from '../../utilities/constants'
import ContentField from './ContentField'

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

class NewPost extends Component {
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
    const newTagList = event.target.value.trim().split(' ')
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
        tags: [...prevState.tags, ...newTagList]
      }))
    } else {
      // continue adding letters
      this.setState({
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
    event.preventDefault()
    // handle input when empty?
    // clear state
    this.setState({
      postInputFieldValue: '',
      tagsInputFieldValue: '',
      tags: [],
    })
    this.props.createPost(this.state.postInputFieldValue, this.state.tags)
  }

  render() {
    return (
      <FormWrapper>
        <form onSubmit={this.handleSubmit} >
          <ContentField
            postInputFieldValue={this.state.postInputFieldValue}
            handlePostInput={this.handlePostInput}
          />
          <TagsBlock
            tags={this.state.tags}
            tagsInputFieldValue={this.state.tagsInputFieldValue}
            handleTagsInput={this.handleTagsInput}
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
