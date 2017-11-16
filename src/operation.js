import float from './float'
import store from './store'

const initStore = new store()

export const openFloat = (Store = initStore) => {
  return (option) => {
    let activeFloat = Store.getStoreByName(option.name)
    if(!activeFloat) {
      activeFloat = new float(option, Store)
      Store.add(activeFloat)
      activeFloat.create()
    }
    activeFloat.open()
  }
}

export const closeFloat = (Store = initStore) => {
  return (name) => {
    let activeFloat = Store.getStoreByName(name)
    activeFloat && activeFloat.close()
  }
}

export const removeFloat = (Store = initStore) => {
  return (name) => {
    let activeFloat = Store.getStoreByName(name)
    activeFloat && activeFloat.remove()
  }
}
