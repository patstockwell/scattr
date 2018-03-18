import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TagsField from './TagsField'
import TitleField from './TitleField'
import { seaGreen } from '../../utilities/constants'
import { addToSet, removeFromSet } from '../../utilities/functions'

const SubmitButton = styled.input`
    outline: none;
    background-color: ${seaGreen(1)};
    color: white;
    font-weight: bold;
    border-radius: 5px;
    width: 100px;
    margin: 10px 0px;
    border: none;
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
      titleInputFieldValue: '',
      tagsInputFieldValue: '',
      tags: [],
    }
    this.handleTitleInput = this.handleTitleInput.bind(this)
    this.handleTagsInput = this.handleTagsInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.removeTag = this.removeTag.bind(this)
    this.removeLastTag = this.removeLastTag.bind(this)
  }

  handleTitleInput(event) {
    event.preventDefault()
    this.setState({
      titleInputFieldValue: event.target.value,
    })
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

  handleSubmit(event) {
    event.preventDefault()
    this.props.createPost(this.state.titleInputFieldValue, this.state.tags)
    // clear state
    this.setState({
      titleInputFieldValue: '',
      tagsInputFieldValue: '',
      tags: [],
    })
  }

  removeTag(tag) {
    this.setState(prevState => ({
      tags: removeFromSet(prevState.tags, tag)
    }))
  }

  removeLastTag() {
    if (this.state.tags.length > 0) {
      this.setState(prevState => ({
        tags: prevState.tags.slice(0, -1)
      }))
    }
  }

  render() {
    // convert type of titleInput from string to boolean
    const disabled = !this.state.titleInputFieldValue
    const buttonColour = { backgroundColor: seaGreen(disabled ? 0.5 : 1) }

    return (
      <FormWrapper>
        <form onSubmit={this.handleSubmit} >
          <TitleField
            titleInputFieldValue={this.state.titleInputFieldValue}
            handleTitleInput={this.handleTitleInput}
          />
          <TagsField
            tags={this.state.tags}
            tagsInputFieldValue={this.state.tagsInputFieldValue}
            handleTagsInput={this.handleTagsInput}
            removeTag={this.removeTag}
            removeLastTag={this.removeLastTag}
          />
          <SubmitButton
            disabled={disabled}
            type="submit"
            value="Post"
            style={buttonColour}
          />
        </form>
      </FormWrapper>
    )
  }
}

InputBlock.propTypes = {
  createPost: PropTypes.func.isRequired,
}

export default InputBlock
