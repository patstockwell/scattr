import React, { Component } from 'react'
// import { Helmet } from 'react-helmet'
import PostFeed from './components/PostFeed'
import samplePosts from './samplePosts'

class App extends Component {
  constructor() {
    super()
    this.state = {
      samplePosts,
    }
  }

  render() {
    return (
      <div className="App">
        <h2>Scattr</h2>
        <PostFeed posts={this.state.samplePosts} />
      </div>
    )
  }
}

export default App
