import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { hoverSuperLightGrey, lightGrey, seaGreen } from '../../utilities/constants'

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

class InputFields extends Component {
  constructor() {
    super()
    this.state = {
      inputFieldValue: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(event) {
    event.preventDefault()
    this.setState({
      inputFieldValue: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      inputFieldValue: '', // clear input field
    })
    this.props.createPost(this.state.inputFieldValue)
  }

  render() {
    return (
      <FormWrapper>
        <form onSubmit={this.handleSubmit} >
          <TextInput
            type="text"
            value={this.state.inputFieldValue}
            onChange={this.handleInput}
            placeholder="plant an idea..."
          />
          <SubmitButton type="submit" value="Post" />
        </form>
      </FormWrapper>
    )
  }
}

InputFields.propTypes = {
  createPost: PropTypes.func.isRequired,
}

export default InputFields
