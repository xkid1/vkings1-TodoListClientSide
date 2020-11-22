<template>
	<div>
		<h1>Todo List</h1>
		<div class="todos">
			<div v-for="todo in getAllTodo" :key="todo.id" class="todo">
				<router-link
					class="viewTodo"
					:to="{
						name: 'ViewTodo',
						params: {
							id: todo.id,
						},
					}"
				>
					{{ todo.description }}
				</router-link>
				<i
					@click="deleteTodo(todo.id)"
					class="fas fa-trash-alt"
					title="Delete todo"
				></i>
				<router-link
					:to="{
						name: 'UpdateTodo',
						params: {
							id: todo.id,
						},
					}"
				>
					<i class="fas fa-edit" title="Edit todo"></i>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	methods: {
		...mapActions(['fetchTodo', 'deleteTodo']),
	},
	computed: mapGetters(['getAllTodo']),
	created() {
		this.fetchTodo();
	},
	mounted() {
		window.Echo.channel('channel').listen('Todo', () => {
			// console.log(e);
			this.fetchTodo();
		});
	},
	components: {
		// components,
	},
};
</script>

<style scoped>
.todos {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1rem;
}
.todo {
	border: 1px solid #ccc;
	background: linear-gradient(
		90deg,
		rgba(2, 0, 36, 0) 0%,
		rgba(0, 212, 255, 0.7035189075630253) 0%,
		rgba(0, 212, 255, 1) 100%
	);

	padding: 1rem;
	border-radius: 5px;
	text-align: center;
	position: relative;
}
.viewTodo {
	cursor: pointer;
}
.fa-trash-alt {
	position: absolute;
	bottom: 10px;
	right: 10px;
	margin-left: 5px;
	color: #fff;
	cursor: pointer;
}
.fa-edit {
	position: absolute;
	bottom: 10px;
	right: 36px;
	margin-left: 5px;
	color: #fff;
	cursor: pointer;
}

@media (max-width: 500px) {
	.todos {
		grid-template-columns: 1fr;
	}
}
</style>
