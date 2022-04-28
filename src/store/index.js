import Vue from 'vue';
import Vuex from 'vuex';
import { getsidebar } from '../api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideBarList: [],
  },
  getters: {},
  mutations: {
    setSideList(state, payload) {
      state.sideBarList = payload;
    },
  },
  actions: {
    async getSideList({ commit }, type) {
      const val = await getsidebar(type);
      commit('setSideList', val);
    },
  },
  modules: {},
});
