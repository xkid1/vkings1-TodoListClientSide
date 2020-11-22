import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import UpdateTodo from '../components/UpdateTodo.vue';
import ViewTodo from '../components/ViewTodo.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: { title: 'Todo Sample' },
	},
	{
		path: '/update-todo/:id',
		name: 'UpdateTodo',
		component: UpdateTodo,
		meta: { title: 'Todo update' },
	},

	{
		path: '/view-todo/:id',
		name: 'ViewTodo',
		component: ViewTodo,
		meta: { title: 'Todo view' },
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

router.afterEach((to) => {
	Vue.nextTick(() => {
		document.title = to.meta.title;
	});
});

export default router;
