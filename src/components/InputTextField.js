import React, { Component } from 'react'
import PropTypes from 'prop-types'

class InputTextField extends Component {
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
      <form onSubmit={this.handleSubmit} >
        <input type="text" value={this.state.inputFieldValue} onChange={this.handleInput} />
        <input type="submit" value="Post" />
      </form>
    )
  }
}

InputTextField.propTypes = {
  createPost: PropTypes.func.isRequired,
}

export default InputTextField
