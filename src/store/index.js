import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    orders: [
      {
        id: 1,
        packageName: "ULTRA рацион",
        packageCalories: "9999 кКал",
        deliveries: [
          {
            id: 1,
            date: "2020-10-01",
            interval: "8:00 - 10:00",
            address: "Дом",
          },
          {
            id: 2,
            date: "2020-10-06",
            interval: "8:00 - 10:00",
            address: "Дом",
          },
          {
            id: 3,
            date: "2021-10-10",
            interval: "8:00 - 10:00",
            address: "Дом",
          },
        ],
      },
      {
        id: 2,
        packageName: "NORMAL рацион",
        packageCalories: "1300 кКал",
        deliveries: [
          {
            id: 4,
            date: "2020-10-01",
            interval: "8:00 - 10:00",
            address: "Дом",
          },
          {
            id: 5,
            date: "2020-10-02",
            interval: "8:00 - 10:00",
            address: "Дом",
          },
          {
            id: 6,
            date: "2020-10-03",
            interval: "8:00 - 10:00",
            address: "Дом",
          },
          {
            id: 7,
            date: "2020-10-04",
            interval: "6:00 - 10:00",
            address: "Дом",
          },
          {
            id: 8,
            date: "2020-11-02",
            interval: "7:00 - 10:00",
            address: "Дом",
          },
          {
            id: 9,
            date: "2021-11-03",
            interval: "8:00 - 10:00",
            address: "Дом",
          },
        ],
      },
    ],

    orderID: "",
  }),

  mutations: {
    changeOrderID(state, orderID) {
      state.orderID = orderID;
    },
  },

  getters: {
    allOrders(state) {
      return state.orders;
    },

    oneOrder(state) {
      return state.orders.filter((order) => order.id === state.orderID);
    },
  },
});
