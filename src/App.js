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
      inputFieldValue: '',
      posts: samplePosts,
      user: {
        firstName: 'Patrick',
        lastName: 'Stockwell',
        profileImage,
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const newPost = {
      id: 234234285,
      firstName: this.state.user.firstName,
      lastName: this.state.user.lastName,
      profileImage: this.state.user.profileImage,
      postContent: this.state.inputFieldValue,
      claps: 0,
      comments: [],
      tags: [],
    }

    this.setState(prevState => ({
      inputFieldValue: '', // reset input field
      posts: [newPost, ...prevState.posts],
    }))
  }

  handleInput(event) {
    event.preventDefault()
    this.setState({
      inputFieldValue: event.target.value,
    })
  }

  render() {
    return (
      <div className="App">
        <Head />
        <h2>Scattr</h2>
        <form onSubmit={this.handleSubmit} >
          <input type="text" value={this.state.inputFieldValue} onChange={this.handleInput} />
          <input type="submit" value="Post" />
        </form>
        <PostFeed posts={this.state.posts} />
      </div>
    )
  }
}

export default App
