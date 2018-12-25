import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		region: 'Tokyo',
		datetime: new Date(),
		currentUnixtime: 0,
		initServerUnixtime: 0,
		initDeviceUnixTime: 0,
	},
	mutations: {
		loadServerTime: (state) => {
			$.ajax({
				url: 'https://ntp-a1.nict.go.jp/cgi-bin/json',
				method: 'GET',
				success: function (data) {
					state.initServerUnixtime = data.st * 1000;
				},
				error: function (error) {
					const nd = new Date();
					state.initServerUnixtime = nd.getTime();
				},
				complete: function() {
					const nd = new Date();
					state.initDeviceUnixTime = nd.getTime();
					setInterval(() => {
						const _nd = new Date();						
						state.currentUnixtime = _nd.getTime() - state.initDeviceUnixTime + state.initServerUnixtime;
					}, 1000);
				},
			});
			
			//TODO mutations does not aasign data in async. let them Promise.
		},
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
