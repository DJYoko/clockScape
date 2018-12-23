import Vue from 'vue';
import Index from '../components/index';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const web_root_uri = '/bitbucket/clockscape/dst/';

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: web_root_uri,
			name: 'index',
			component: Index,
			alias: web_root_uri + 'index.html',
		},
    ],
});

export default router;
