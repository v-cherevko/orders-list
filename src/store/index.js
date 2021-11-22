import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    orders: [],
    orderView: ''
  }),

  mutations: {
    setOrders(state, orders) {
      state.orders = orders
    },

    changeOrderID(state, id) {
      state.orderView = id
    },

    clearOrderID(state) {
      state.orderView = ''
    },

    duplicate(state, order) {
      state.orders.push(order)
    },

    deleteOrder(state, id) {
      state.orders = state.orders.filter(order => order.id !== id)
    }
  },

  getters: {
    allOrders(state) {
      return state.orders
    },

    activeOrderView(state) {
      return state.orders.find(order => order.id === state.orderView)
    }
  },

  actions: {
    async cancelOrder({ commit }, id) {
      commit('deleteOrder', id)
      commit('clearOrderID')
    },

    duplicateOrder({ state, commit }, order) {
      const duplicateOrder = JSON.parse(JSON.stringify(order))
      for (const elem of state.orders) {
        if (elem.id === duplicateOrder.id) {
          duplicateOrder.id++
        }
      }
      commit('duplicate', duplicateOrder)
    }
  }
})
