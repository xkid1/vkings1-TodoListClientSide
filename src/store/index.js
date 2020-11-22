import Vue from 'vue';
import Vuex from 'vuex';
import todo from './todo/todo';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: { todo },
});
