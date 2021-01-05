const AUTH_LIST = ['admin']

// *检验传入的数据权限
function checkAuth(params) {
  return AUTH_LIST.some(item => params.includes(item))
}

const auth = {
  inserted(el, binding) {
    // *不在权限内直接移除dom
    if (!checkAuth(binding.value)) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  }
}

export default auth
