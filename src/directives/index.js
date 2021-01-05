import copy from './copy'
import longpress from './longpress'
import debounce from './debounce'
import emoji from './emoji'
import permission from './permission'
import auth from './auth'

const directives = {
  copy,
  longpress,
  debounce,
  emoji,
  permission,
  auth
}

export default {
  install(Vue) {
    Object.keys(directives).forEach(key => {
      Vue.directive(key, directives[key])
    })
  }
}
