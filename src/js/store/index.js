import { createStore } from 'vuex';
import main from './main';

const store = createStore({
  modules: {
    main,
  },
});
export default store;
