import Vue from 'vue';
import Index from '../components/index';
import VueRouter from 'vue-router';
import CONSTANTS from '../utils/constants';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: CONSTANTS.WEB_ROOT,
			name: 'index',
			component: Index,
			alias: CONSTANTS.WEB_ROOT + 'index.html',
		},
		{
			path: CONSTANTS.WEB_ROOT + ':region',
			name: 'region',
			component: Index,
		},
    ],
});

export default router;
