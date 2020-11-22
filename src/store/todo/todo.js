import axios from 'axios';

const state = {
	todos: [],
};
const getters = {
	getAllTodo: (todos) => todos.todos,
};
const actions = {
	async fetchTodo({ commit }) {
		const response = await axios.get('/api/todo');
		// console.log(response.data);
		commit('SET_TODOS', response.data);
	},
	async addTodo({ commit }, description) {
		const response = await axios.post('/api/todo-post', {
			description,
		});
		// console.log(response.data);
		commit('ADD_TODO', response.data);
	},

	async getTodobyId({ commit }, id) {
		const response = await axios.get(`/api/todo-update/${id}`);
		// console.log(response.data);
		commit('TODO_GET_UPDATE', response.data);
	},
	async updateTodo({ commit }, id, description) {
		const respone = await axios.put(`api/todo-update/${id}`, { description });
		console.log(respone.data);
		commit('TODO_GET_UPDATE', respone.data);
	},
	async deleteTodo({ commit }, id) {
		await axios.delete(`/api/todo-delete/${id}`);
		commit('DELETE_TODO', id);
	},
};
const mutations = {
	SET_TODOS: (state, todos) => (state.todos = todos),
	ADD_TODO: (state, todo) => state.todos.push(todo),
	DELETE_TODO: (state, id) =>
		(state.todos = state.todos.filter((todo) => todo.id != id)),
	TODO_GET_UPDATE: (state, updataTodo) => {
		const index = state.todos.findIndex((todo) => todo.id === updataTodo.id);
		if (index !== -1) state.todos.splice(index, 1, updataTodo);
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
