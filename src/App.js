import React from 'react'
// import { Helmet } from 'react-helmet'
import Post from './components/Post'
import profileImage from './assets/profile-picture.png'

const sampleComments = [
  { name: 'Zosia', content: 'sounds like a good idea' },
  { name: 'Zosia', content: 'When can we start?' },
  { name: 'Patrick', content: 'How about next Tuesday?' },
]

const App = () => (
  <div className="App">
    <h2>Scattr</h2>
    <Post
      firstName="Patrick"
      lastName="Stockwell"
      profileImage={profileImage}
      postContent="The is the first idea to be posted to Scattr"
      claps={25}
      comments={sampleComments}
    />
  </div>
)

export default App
