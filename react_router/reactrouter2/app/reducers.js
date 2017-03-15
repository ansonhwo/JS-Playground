const test = (state = 'default', action) => {
  switch (action.type) {
    case 'NEW_TEST':
      return action.test
    default:
      return state
  }
}

module.exports = test
