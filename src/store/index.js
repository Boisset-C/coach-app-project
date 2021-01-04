import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';

// to install vueX 4 npm install vuex@next --save

const store = createStore({
  modules: {
    coaches: coachesModule,
  }
})

export default store;