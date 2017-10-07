import Vue from "vue";
import Vuex from "vuex";

// vue needs loaded and vuex prior to this script included
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    currentStory: "",
  },
  mutations: {
    setCurrentStory: function(state, value) {
      state.currentStory = value;
    },
  },
  getters: {
    getCurrentStory: state => {
      return state.currentStory;
    },
  },
  actions: {
    currentStory(context, payload) {
      context.commit("setCurrentStory", payload);
    },
  },
});
