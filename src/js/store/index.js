import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		region: 'Tokyo',
		datetime: 0,
		currentUnixtime: 0,
		initServerUnixtime: 0,
		initDeviceUnixTime: 0,
	},
	mutations: {
		loadServerTime: (state, payload) => {
			const promise = $.ajax({
				url: 'https://ntp-a1.nict.go.jp/cgi-bin/json',
				method: 'GET',
			});
			
			promise.done(function (data) {
				state.initServerUnixtime = data.st * 1000;
			});
			
			promise.fail(function (error) {
				const nd = new Date();
				state.initServerUnixtime = nd.getTime();
			});
			
			promise.then(function () {
				const nd = new Date();
				state.initDeviceUnixTime = nd.getTime();
				payload.callback();
			});
		},
		updateTime: (state) =>{
			const _nd = new Date();						
			state.currentUnixtime = _nd.getTime() - state.initDeviceUnixTime + state.initServerUnixtime;
		}
	},
	actions: {
		loadServerTime: (context, payload) => {
			context.commit('loadServerTime', payload);
		},
		updateTime: (context) => {
			context.commit('updateTime');
		}
	}
});
