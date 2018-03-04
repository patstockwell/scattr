import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'
import Head from './components/Head'
import profileImage from './assets/profile-picture.png'
import PostFeed from './components/PostFeed'
import samplePosts from './samplePosts'
import { charcoal } from './utilities/constants'
import InputTextField from './components/input-fields/InputFields'
import NavBar from './components/NavBar'

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
      posts: samplePosts,
      user: {
        firstName: 'Patrick',
        lastName: 'Stockwell',
        profileImage,
      }
    }
    this.createPost = this.createPost.bind(this)
    this.clapOnce = this.clapOnce.bind(this)
  }

  createPost(content) {
    const newPost = {
      id: 234234285,
      firstName: this.state.user.firstName,
      lastName: this.state.user.lastName,
      profileImage: this.state.user.profileImage,
      postContent: content,
      claps: 0,
      comments: [],
      tags: [],
    }

    this.setState(prevState => ({
      posts: [newPost, ...prevState.posts],
    }))
  }

  clapOnce(postId) {
    console.log(postId, this.state.user.firstName)
  }

  render() {
    return (
      <div className="App">
        <Head />
        <NavBar
          firstName={this.state.user.firstName}
          profileImage={this.state.user.profileImage}
        />
        <InputTextField createPost={this.createPost} />
        <PostFeed
          posts={this.state.posts}
          clapOnce={this.clapOnce}
        />
      </div>
    )
  }
}

export default App
