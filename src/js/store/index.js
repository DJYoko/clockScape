import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		region: 'Tokyo',
		datetime: new Date(),
	},
	mutations: {
		loadServerTime: (context) => {
			$.ajax({
				url: 'https://ntp-a1.nict.go.jp/cgi-bin/json',
				method: 'GET',
				success: function (data) {
					console.log(data);
				},
				error: function (error) {
					console.log(error);
				}
			});
		},
		updateTime: (state, payload) => {
			state.datetime = payload;
		}
	},
	actions: {
		loadServerTime: (context) => {
			context.commit('loadServerTime');
		},
		updateTime: (context, payload) => {
			context.commit('updateTime', payload);
		}
	}
});
