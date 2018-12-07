import Vue from 'vue'
import router from '@/router'

let actions = {
    // table data
    getItems({commit, state}) {
      commit('setLoadingStatus', true)
      Vue.http.get(state.prefix + '/' + state.path)
        .then((response) => {
          commit('setItems', response.body)
          commit('setLoadingStatus', false)
        }, error => {
          commit('alertError', error.statusText, { root: true })
        });
    },
    getItemsServerSide({commit, state}, [params]) {
      return new Promise((resolve, reject) => {
        commit('setLoadingStatus', true)
        Vue.http.post(state.prefix + '/' + state.path + '/async-data', params)
          .then((response) => {
            commit('setItemsServerSide', response.body)
            resolve()
          }), error => {
            commit('alertError', error.statusText, { root: true })
          }
      })
    },
    // item details
    getItem({commit, state}, [id]) {
      return new Promise((resolve, reject) => {
        commit('setDetailsLoader', true)
        Vue.http.get(state.prefix + '/' + state.path + '/' + id)
          .then((response) => {
            commit('setItem', response.body)
            commit('setDetailsLoader', false)
            resolve()
          }), error => {
            commit('alertError', error.statusText, { root: true })
          }
      })
    },
    updateItem({commit, dispatch, state}, [id, params, successText, errorText]) {
      Vue.http.put(state.prefix + '/' + state.path + '/' + id, params)
        .then((response) => {
          if (response.body.status == 0) {
            commit('alertSuccess', successText, { root: true })
            commit('refreshTable')
          }
          else if (response.body.status == -1) {
            commit('alertError', response.body.msg, { root: true })
          }
          else if (response.body.status == -2) {
            commit('alertValidationError', response.body.msg, { root: true })
          }
        }, error => {
          commit('alertError', error.statusText, { root: true })
        })
    },
    storeItem({commit, dispatch, state}, [params, successText, errorText]) {
      Vue.http.post(state.prefix + '/' + state.path, params)
        .then((response) => {
          if (response.body.status == 0) {
            commit('alertSuccess', successText, { root: true })
            commit('refreshTable')
          }
          else if (response.body.status == -1) {
            commit('alertError', response.body.msg, { root: true })
          }
          else if (response.body.status == -2) {
            commit('alertValidationError', response.body.msg, { root: true })
          }
          if(state.createdElement.mode == 'inform'){
            commit('setCreatedItemStatus', [true, response.body.id])
          }
        }, error => {
          commit('alertError', error.statusText, { root: true })
        });
    },
    deleteItem({commit, dispatch, state}, [id, successText, errorText]) {
      Vue.http.delete(state.prefix + '/' + state.path + '/' + id)
        .then((response) => {
          commit('alertSuccess', successText, { root: true })
          commit('refreshTable')
        }, error => {
          commit('alertError', error.statusText, { root: true })
        });
    },
    mulitipleItemsUpdate({commit, dispatch, state}, [params, successText, errorText]){
      Vue.http.post(state.prefix + '/' + state.path + '/multiple-update', params)
        .then((response) => {
          commit('alertSuccess', successText, { root: true })
          commit('refreshTable')
        }, error => {
          commit('alertError', error.statusText, { root: true })
        });
    },
    mulitipleItemsDelete({commit, dispatch, state}, [ids, successText, errorText]){
      Vue.http.post(state.prefix + '/' + state.path + '/multiple-delete', ids)
        .then((response) => {
          commit('alertSuccess', successText, { root: true })
          commit('refreshTable')
        }, error => {
          commit('alertError', error.statusText, { root: true })
        });
    },
    // item elements
    getItemElements({commit, state}) {
      let url = state.itemElements.url.replace('{id}', state.itemElements.id);
      Vue.http.get(url)
        .then((response) => commit('setItemElements', response.body))
    },
    addItemElement({commit, dispatch, state}, [params, successText, errorText]) {
      Vue.http.post(state.itemElements.controller, params)
        .then((response) => {
          commit('alertSuccess', successText, { root: true })
          dispatch('getItemElements')
        }, error => {
          commit('alertError', error.statusText, { root: true })
        });
    },
    removeItemElement({commit, dispatch, state}, [id, successText, errorText]) {
      Vue.http.delete(state.itemElements.controller + '/' + id)
        .then((response) => {
          commit('alertSuccess', successText, { root: true })
          dispatch('getItemElements')
        }, error => {
          commit('alertError', error.statusText, { root: true })
        });
    },
    addManyItemElements({commit, dispatch, state}, [params, successText, errorText]) {
      Vue.http.post(state.itemElements.controller + '/multiple-add', params)
        .then((response) => {
          commit('alertSuccess', successText, { root: true })
          dispatch('getItemElements')
        }, error => {
          commit('alertError', error.statusText, { root: true })
        });
    },
    removeManyItemElements({commit, dispatch, state}, [ids, successText, errorText]) {
      Vue.http.post(state.itemElements.controller + '/multiple-delete', ids)
        .then((response) => {
          commit('alertSuccess', successText, { root: true })
          dispatch('getItemElements')
        }, error => {
          commit('alertError', error.statusText, { root: true })
        });
    },
    // extented details
    getItemDetails({commit, state}, [id]) {
      return new Promise((resolve, reject) => {
        commit('setDetailsLoader', true)
        Vue.http.get(state.prefix + '/' + state.path + '/' + id)
          .then((response) => {
            commit('itemDetails', response.body)
            commit('setDetailsLoader', false)
            resolve()
          }), error => {
            commit('alertError', error.statusText, { root: true })
          }
      })
    },
    updateItemDetail({commit, dispatch, state}, [id, params, successText]) {
      Vue.http.put(state.prefix + '/' + state.path + '/' + id, params)
        .then((response) => {
          if (response.body.status == 0) {
            commit('alertSuccess', successText, { root: true })
          }
          else if (response.body.status == -1) {
            commit('alertError', response.body.msg, { root: true })
          }
          else if (response.body.status == -2) {
            commit('alertValidationError', response.body.msg, { root: true })
          }
          dispatch('getItemDetails', [state.item[state.itemIdColumn]])
        }, error => {
          commit('alertError', error.statusText, { root: true })
        });
    },
    // child details
    updateChild({commit, dispatch, state}, [id, params, successText, path]) {
      Vue.http.put(path + '/' + id, params)
        .then((response) => {
          if (response.body.status == 0) {
            commit('alertSuccess', successText, { root: true })
          }
          else if (response.body.status == -1) {
            commit('alertError', response.body.msg, { root: true })
          }
          else if (response.body.status == -2) {
            commit('alertValidationError', response.body.msg, { root: true })
          }
          dispatch('getItemDetails', [state.item[state.itemIdColumn]])
        }, error => {
          commit('alertError', error.statusText, { root: true })
        })
    },
    deleteChild({commit, dispatch, state}, [id, successText, errorText, path]) {
      Vue.http.delete(path + '/' + id)
        .then((response) => {
          if (response.body.status == 0) {
            commit('alertSuccess', successText, { root: true })
          }
          else if (response.body.status == -1) {
            commit('alertError', response.body.msg, { root: true })
          }
          else if (response.body.status == -2) {
            commit('alertValidationError', response.body.msg, { root: true })
          }
          dispatch('getItemDetails', [state.item[state.itemIdColumn]])
        }, error => {
          commit('alertError', error.statusText, { root: true })
        });
    },
    storeChild({commit, dispatch, state}, [params, successText, path]) {
      Vue.http.post(path, params)
        .then((response) => {
          commit('alertSuccess', successText, { root: true })
          dispatch('getItemDetails', [state.item[state.itemIdColumn]])
        }, error => {
          commit('alertError', error.statusText, { root: true })
        })
    },
    getChild({commit, state}, [id, path, childItemName]) {
      return new Promise((resolve, reject) => {
        Vue.http.get(path + '/' + id)
          .then((response) => {
            commit('setChild', [response.body, childItemName])
            resolve()
          }, error => {
            commit('alertError', error.statusText, { root: true })
          })
      })
    },
}

export default actions
