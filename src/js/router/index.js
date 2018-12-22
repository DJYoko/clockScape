import Vue from 'vue';
import Index from '../components/index';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/bitbucket/clockscape/dst/',
			name: 'index',
			component: Index
		},
    ],
});

export default router;
