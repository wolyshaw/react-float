export default class store {
  constructor(float) {
    this.float = float || {}
    this.openlist = {}
  }

  getStoreByName(name) {
    return this.openlist[name]
  }

  getComponentByName(name) {
    return this.float[name]
  }

  add(float) {
    this.openlist[float.name] = float
  }

  remove(name) {
    delete this.openlist[name]
  }
}
