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
