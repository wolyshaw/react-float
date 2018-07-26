export const keyNameAddFix = (obj, lastName) => {
  if(lastName) {
    Object.keys(obj).map(k => {
      const newKey = k + lastName
      obj[newKey] = obj[k]
      delete obj[k]
    })
  }
  return obj
}

export const getNeedKeys = activeFloat => {
  const options = {}
  if(activeFloat) {
    const limitKeys = ['title', 'header', 'mask', 'maskClose', 'width', 'closed']
    Object.keys(activeFloat).map(k => {
      if(limitKeys.includes(k)) {
        options[k] = activeFloat[k]
        delete activeFloat[k]
      }
    })
  }
  return options
}
