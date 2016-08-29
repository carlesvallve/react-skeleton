// ============================================

let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

// ============================================

export const openPopup = (data) => {
  return {
    type: 'POPUP_OPEN',
    data
  }
}

export const closePopup = () => {
  return {
    type: 'POPUP_CLOSE',
  }
}

export const refreshList = (itemCount) => {
  return {
    type: 'LIST_REFRESH',
    itemCount
  }
}

// ============================================

export const show = (id) => {
  return {
    type: 'SET_VISIBLE',
    id,
    visible: true
  }
}

export const hide = (id) => {
  return {
    type: 'SET_VISIBLE',
    id,
    visible: false
  }
}

export const setVisible = (id, visible) => {
  return {
    type: 'SET_VISIBLE',
    id,
    visible
  }
}

export const toggleVisible = (id) => {
  return {
    type: 'TOGGLE_VISIBLE',
    id
  }
}

// ==========================
