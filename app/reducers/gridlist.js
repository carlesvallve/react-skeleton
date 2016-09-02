const gridlist = (state = {}, action) => {
  switch (action.type) {

    case 'LIST_REFRESH':
      return Object.assign({}, state, {
        itemCount: action.itemCount,
        data: action.data
      })

    default:
      return state
  }
}

export default gridlist
