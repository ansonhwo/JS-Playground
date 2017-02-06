const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      return state.message
    default:
      return state
  }
}

module.exports = reducer
