import Vue from 'vue';
import Vuex from 'vuex';
import { getGoodsList, getsidebar } from '../api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideBarList: [],
    showContent: false,
    size: 5,
    goodsList: [],
    type: null,
    counterMap: {},
  },
  getters: {},
  mutations: {
    setSideList(state, payload) {
      state.sideBarList = payload;
    },
    setShowContent(state, payload) {
      state.showContent = payload;
    },
    setGoodsList(state, payload) {
      state.goodsList = [...state.goodsList, ...payload];
    },
    resetGoodsList(state) {
      state.goodsList = [];
    },
    setGoodsType(state, payload) {
      state.type = payload;
    },
    setCounterMap(state, payload) {
      state.counterMap = payload;
    },
    storageChange(state, { id, value }) {
      if (state.counterMap[id]) {
        if ((value === -1 && state.counterMap[id] === 1)||value === -Infinity) {
          Vue.delete(state.counterMap, id);
        } else {
          Vue.set(state.counterMap, id, state.counterMap[id] + value);
        }

      } else {
        Vue.set(state.counterMap, id, 1);
      }
      localStorage.setItem('goods', JSON.stringify(state.counterMap));
    },
  },
  actions: {
    async getSideList({ commit }, type) {
      commit('setShowContent', false);
      const val = await getsidebar(type);
      commit('setSideList', val);
      commit('setShowContent', true);
    },
    async getGoodsList({ state, commit }, options) {
      const { page, sort } = options;
      const type = options.type || state.type;
      const { list, total } = await getGoodsList(type, page, state.size, sort);
      commit('setGoodsList', list)
      commit('setGoodsType', type)
      if (total > state.goodsList.length) {
        return true;
      } else {
        return false;
      }
    }
  },
  modules: {},
});
