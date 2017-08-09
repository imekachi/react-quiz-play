import { configure } from '@storybook/react'

// each filename returns as "./_Component.js"
const req = require.context('../src/stories', true, /^(\.\/_)(.+)(\.js$)/)

// Explicitly require load stories
// function loadStories() {
//   // require('../src/stories');
//   req.keys().forEach(filename => req(filename))
// }

// Dynamically load stories
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
