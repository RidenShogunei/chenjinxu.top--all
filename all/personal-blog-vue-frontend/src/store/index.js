import { createStore } from 'vuex'

export default createStore({
  state: {
    musiclist:[],
  },
  getters: {
  },
  mutations: {
    changemusiclist(state,newmusic){
      state.musiclist=newmusic;
    }
  },
  actions: {
  },
  modules: {
  }
})
