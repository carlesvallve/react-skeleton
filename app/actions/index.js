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

export const refreshList = (itemCount, data) => {
  return {
    type: 'LIST_REFRESH',
    itemCount,
    data
  }
}
