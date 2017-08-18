export default (response, delay = 1000) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(response)
    }, 0)
  })
}