import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'
import Head from './components/Head'
import profileImage from './assets/profile-picture.png'
import PostFeed from './components/PostFeed'
import samplePosts from './samplePosts'
import { charcoal } from './utilities/constants'

/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */

injectGlobal`
  body {
    color: ${charcoal};
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-style: normal;
    font-variant: normal;
    line-height: 23px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 20px;
  }
`

class App extends Component {
  constructor() {
    super()
    this.state = {
      newCommentValue: '',
      samplePosts,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const newComment = {
      id: 234234285,
      firstName: 'Patrick',
      lastName: 'Stockwell',
      profileImage,
      postContent: this.state.newCommentValue,
      claps: 0,
      comments: [],
    }

    this.setState(prevState => ({
      newCommentValue: '',
      samplePosts: [newComment, ...prevState.samplePosts],
    }))
  }

  handleInput(event) {
    event.preventDefault()
    this.setState({
      newCommentValue: event.target.value,
    })
  }

  render() {
    return (
      <div className="App">
        <Head />
        <h2>Scattr</h2>
        <form onSubmit={this.handleSubmit} >
          <input type="text" value={this.state.newCommentValue} onChange={this.handleInput} />
          <input type="submit" value="Post" />
        </form>
        <PostFeed posts={this.state.samplePosts} />
      </div>
    )
  }
}

export default App
