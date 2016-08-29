// ============================================

const gridlist = (state = {}, action) => {
  switch (action.type) {

    case 'LIST_REFRESH':
      console.log('refreshing list with ' + action.itemCount + ' items');
      return Object.assign({}, state, {
        itemCount: action.itemCount
      })

    default:
      return state
  }
}

export default gridlist

// ============================================
