<template>
	<div>
		<h3>Add Todo</h3>
		<div class="add">
			<div v-if="error" :class="{ error: error }">{{ dataDesc }}</div>
			<form @submit="onSubmit">
				<input
					:class="{ todoInput: todoInput, todoInputError: todoInputError }"
					type="text"
					v-model="description"
					placeholder="Add Todo..."
					autofocus
				/>
				<input type="submit" value="Add Todo" />
			</form>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	data() {
		return {
			description: '',
			error: false,
			todoInput: true,
			todoInputError: false,
			dataDesc: 'Please add todo',
		};
	},
	methods: {
		...mapActions(['addTodo']),
		onSubmit(e) {
			e.preventDefault();
			if (this.description == '') {
				this.error = true;
				this.todoInputError = true;
				this.todoInput = false;
				return;
			} else {
				this.error = false;
				this.todoInputError = false;
				this.todoInput = true;
				this.addTodo(this.description);
				this.description = '';
			}
		},
	},
};
</script>

<style scoped>
form {
	display: flex;
}
.error {
	color: rgba(255, 51, 0, 0.704);
}
.todoInput {
	flex: 10;
	padding: 10px;
	border: 1px solid rgba(0, 212, 255, 0.7035189075630253);
	outline: 0;
}
.todoInputError {
	border: 1px solid rgba(255, 51, 0, 0.704);
}
input[type='submit'] {
	flex: 2;
	background: linear-gradient(
		90deg,
		rgba(2, 0, 36, 0) 0%,
		rgba(0, 212, 255, 0.7035189075630253) 0%,
		rgba(0, 212, 255, 1) 100%
	);
	color: #fff;
	border: 1px rgba(0, 212, 255, 0.7035189075630253) solid;
	cursor: pointer;
}
</style>
