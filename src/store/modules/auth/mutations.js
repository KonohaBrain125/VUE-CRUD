import router from '@/router'

let mutations = {
  login(state, data) {
    state.logged = 1
    let token = data.token
    let user = JSON.stringify(data.user)
    localStorage.setItem('token', token);
    localStorage.setItem('user', user);
    state.token = token
    state.user = user
    router.push({
      path: '/'
    });
  },
  logout(state) {
    state.logged = 0
    state.user = null
    state.token = null
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push({
      path: '/login'
    });
  },
  editUser(state, data) {
    let user = JSON.stringify(data)
    localStorage.setItem('user', user);
    state.user = user
    state.userUpdated = true
    setTimeout(function(){
      state.userUpdated = false
    }, 3000)
  },
  editPassword(state, data) {
    if(data.status == 1){
      state.userPasswordUpdated = true
      setTimeout(function(){
        state.userPasswordUpdated = false
      }, 3000)
    }
    else if (data.status == -1){
      state.userPasswordUpdateError = true
      state.userPasswordUpdateErrorMsg = data.msg
      setTimeout(function(){
        state.userPasswordUpdateError = false
      }, 3000)
    }
  }
}
export default mutations
