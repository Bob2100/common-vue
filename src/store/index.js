import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import layout from './modules/layout';
import stock from './modules/stock';
import trade from './modules/trade';
import kline from './modules/kline';
import income from './modules/income';
import balance from './modules/balance';
import cashFlow from './modules/cashFlow';
import account from './modules/account';
import forecast from './modules/forecast';
import dealRecord from './modules/dealRecord';
import getters from './getters';

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    layout,
    stock,
    trade,
    kline,
    income,
    balance,
    cashFlow,
    forecast,
    account,
    dealRecord
  },
  getters
})
export default store
