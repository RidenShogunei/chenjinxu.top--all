import {createStore} from 'vuex'
 
// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            page: '1',
            response: null,
            stock:null,
        }
    },
    mutations: {
      updatePage(state, page) {
        state.page = page;
      },
      setResponse(state, response) {
        state.response = response;
      },
      updatestock(state,stock){
        state.stock=stock;
      }
    }
})
 
export default store