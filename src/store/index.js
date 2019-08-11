import { decorate, observable, action } from 'mobx'

const sessionKey = 'store_message'
let message = window.sessionStorage.getItem(sessionKey)
if (message) {
  message = JSON.parse(message)
} else {
  message = {
    type: '',
    title: '',
    content: '',
    tips: ''
  }
}

class Store {
  msg = message
  setMsg(msg) {
    this.msg = msg
    window.sessionStorage.setItem(sessionKey, JSON.stringify(msg))
  }
}

new decorate(Store, {
  msg: observable,
  setMsg: action
})

export default new Store()
