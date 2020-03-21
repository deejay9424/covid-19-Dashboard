import Vuex from 'vuex';
import mainModule from './mainModule';

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      main: mainModule
    }
  });
};

export default createStore