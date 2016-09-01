// ============================================

const gridlist = (state = {}, action) => {
  switch (action.type) {

    case 'LIST_REFRESH':
      console.log('refreshing list with ' + action.itemCount + ' items with data', action.data);
      return Object.assign({}, state, {
        itemCount: action.itemCount,
        data: action.data
      })

    default:
      return state
  }
}

export default gridlist

// ============================================
