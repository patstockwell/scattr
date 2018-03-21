import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import Head from './components/Head'
import profileImage from './assets/profile-picture.png'
import samplePosts from './samplePosts'
import { charcoal } from './utilities/constants'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import PostPage from './pages/PostPage'

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
  }

  createPost(title, tags) {
    const newPost = {
      id: 234234285,
      timestamp: Date.now(),
      firstName: this.state.user.firstName,
      lastName: this.state.user.lastName,
      profileImage: this.state.user.profileImage,
      title,
      claps: 0,
      comments: [],
      tags: (tags || []),
    }

    this.setState(prevState => ({
      posts: [newPost, ...prevState.posts],
    }))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Head />
          <NavBar
            firstName={this.state.user.firstName}
            profileImage={this.state.user.profileImage}
          />
          <Route
            exact
            path="/"
            render={() => (
              <Home
                createPost={this.createPost}
                posts={this.state.posts}
              />
            )}
          />
          <Route
            path="/post/:id"
            render={({ match }) => (
              <PostPage
                {...this.state.posts[match.params.id]}
              />
            )}
          />
        </div>
      </Router>
    )
  }
}

export default App
