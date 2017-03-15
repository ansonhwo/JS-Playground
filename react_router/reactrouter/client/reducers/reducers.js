exports.view = (state = 'landing', action) => {
  switch (action.type) {
    case 'CHANGE_MAIN_VIEW':
      return action.mainView
    default:
      return state
  }
}
