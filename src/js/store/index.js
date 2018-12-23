import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		region: 'ja',
		datetime: new Date(),
	},
	mutations: {
		updateTime: (state, payload) => {
			state.datetime = payload;
		}
	},
	actions: {
		updateTime: (context, payload) => {
			context.commit('updateTime', payload);
		}
	}
});
