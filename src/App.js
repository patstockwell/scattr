import React, { Component } from 'react'
// import { Helmet } from 'react-helmet'
import profileImage from './assets/profile-picture.png'
import PostFeed from './components/PostFeed'
import samplePosts from './samplePosts'

class App extends Component {
  constructor() {
    super()
    this.state = {
      newCommentValue: '',
      samplePosts,
    }
    this.addComment = this.addComment.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  addComment(event) {
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
      samplePosts: [newComment, ...prevState.samplePosts]
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
        <h2>Scattr</h2>
        <form onSubmit={this.addComment} >
          <input type="text" value={this.state.newCommentValue} onChange={this.handleInput} />
          <input type="submit" value="Post" />
        </form>
        <PostFeed posts={this.state.samplePosts} />
      </div>
    )
  }
}

export default App
