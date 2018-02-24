import profileImage from './assets/profile-picture.png'

const sampleComments = [
  { name: 'Zosia', content: 'sounds like a good idea', id: 98273 },
  { name: 'Zosia', content: 'When can we start?', id: 98274 },
  { name: 'Patrick', content: 'How about next Tuesday?', id: 98275 },
]

const samplePosts = [
  {
    id: 234234274,
    firstName: 'Patrick',
    lastName: 'Stockwell',
    profileImage,
    postContent: 'The is the first idea to be posted to Scattr',
    claps: 25,
    comments: sampleComments,
  }
]

export default samplePosts
