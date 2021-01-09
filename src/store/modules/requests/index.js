import mutations from './mutations.js';
import actions from './actions.js';
import getter from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      requests: []
    };
  },
  mutations,
  actions,
  getter,
};