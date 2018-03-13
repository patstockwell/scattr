import profileImage from './assets/profile-picture.png'

const sampleComments1 = [
  { name: 'Zosia', content: 'sounds like a good idea', id: 98273 },
  { name: 'Zosia', content: 'When can we start?', id: 98274 },
  { name: 'Patrick', content: 'How about next Tuesday?', id: 98275 },
]

const sampleComments2 = [
  { name: 'James', content: 'Schweeet', id: 98274 },
  { name: 'Frederick', content: 'lol', id: 98275 },
]

const samplePosts = [
  {
    id: 234234274,
    timestamp: 1520922244344,
    firstName: 'Patrick',
    lastName: 'Stockwell',
    profileImage,
    postContent: 'The is the first idea to be posted to Scattr',
    claps: 25,
    comments: sampleComments1,
    tags: ['#first', '#post', '#new', '#scattr', '#Patrick']
  },
  {
    id: 234234275,
    timestamp: 1520921244344,
    firstName: 'Patrick',
    lastName: 'Stockwell',
    profileImage,
    postContent: 'The is the second idea to be posted to Scattr. It\'s a bit longer than the first. It also has a different key.',
    claps: 8,
    comments: sampleComments2,
    tags: ['#second', '#post', '#scattr', '#REAGroup']
  },
  {
    id: 234234276,
    timestamp: 1520920244344,
    firstName: 'Patrick',
    lastName: 'Stockwell',
    profileImage,
    postContent: 'Remove handles from the "push-side" of the door',
    claps: 41,
    comments: sampleComments2,
    tags: []
  },
]

export default samplePosts
