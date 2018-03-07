import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lightGrey, seaGreen } from '../../utilities/constants'
import NewPostField from './NewPostField'
import TagsField from './TagsField'

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
    if (lastLetter === ' ') {
      this.setState(prevState => ({
        tagsInputFieldValue: '', // clear input field
        tags: [...prevState.tags, newTag]
      }))
    } else {
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
    // handle input when empty?
    event.preventDefault()
    this.setState({
      postInputFieldValue: '', // clear input field
      tagsInputFieldValue: '', // clear input field
    })
    this.props.createPost(this.state.postInputFieldValue, this.state.tags)
  }

  render() {
    return (
      <FormWrapper>
        <form onSubmit={this.handleSubmit} >
          <NewPostField
            postInputFieldValue={this.state.postInputFieldValue}
            handlePostInput={this.handlePostInput}
          />
          <TagsField
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

InputBlock.propTypes = {
  createPost: PropTypes.func.isRequired,
}

export default InputBlock
