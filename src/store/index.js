import Vue from 'vue'
import Vuex from 'vuex'
import Persistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      id: ''
    },
    whichProduct: '',
    cartArray: [
      // {
      //   _id: '',
      //   name: '',
      //   file: '',
      //   price: null,
      //   count: null,
      //   total: null
      // }
    ],
    allProductsAmount: null,
    wherefrom: ''
  },
  mutations: {
    logout (state) {
      state.user.name = ''
      state.user.id = ''
    },
    login (state, data) {
      state.user.name = data.account
      state.user.id = data._id
    },
    delProduct (state, cartArrayIndex) {
      state.cartArray.splice(cartArrayIndex, 1)
    },
    addToCart (state, productdata) {
      if (state.cartArray.length === 0) {
        state.cartArray.push({
          _id: productdata._id,
          name: productdata.name,
          file: productdata.file,
          price: productdata.price,
          count: productdata.count,
          total: productdata.total
        })
      } else {
        for (let i = 0; i < state.cartArray.length; i++) {
          if (state.cartArray[i]._id === productdata._id) {
            if ((state.cartArray[i].count + productdata.count) < productdata.total) {
              state.cartArray[i].count += productdata.count
              break
            } else if ((state.cartArray[i].count + productdata.count) >= productdata.total) {
              state.cartArray[i].count = productdata.total
              break
            }
          }

          if (state.cartArray[i]._id !== productdata._id && state.cartArray.length - 1 === i) {
            state.cartArray.push({
              _id: productdata._id,
              name: productdata.name,
              file: productdata.file,
              price: productdata.price,
              count: productdata.count,
              total: productdata.total
            })
            break
          }
        }
      }
    },
    cleanTheCart (state) {
      const Length = state.cartArray.length
      state.cartArray.splice(0, Length)
    },
    whichProduct (state, data) {
      state.whichProduct = data
    },
    allProductsAmount (state, allCount) {
      state.allProductsAmount = allCount
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [Persistedstate()],
  getters: {
    items (state) {
      return state.items
    },
    whichProduct () {

    }
  }

})
