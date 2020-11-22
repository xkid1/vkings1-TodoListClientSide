<template>
	<div class="modal">
		<transition name="modal">
			<div class="modal-mask">
				<div class="modal-wrapper">
					<div class="modal-container">
						<div class="modal-header">
							<h5 class="modal-title">
								Update todo
							</h5>
						</div>

						<div class="modal-body">
							<form @submit.prevent="onSubmit">
								<input type="text" v-model="description" autofocus />
								<input type="submit" value="Update Todo" />
							</form>
						</div>
					</div>
				</div>
			</div>
		</transition>
		<AddTodo />
		<Todo />
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';
import AddTodo from '@/components/addTodo';
import Todo from '@/components/Todo';
export default {
	data() {
		return {
			id: this.$route.params.id,
			description: '',
		};
	},
	methods: {
		...mapActions(['getTodobyId']),

		onSubmit(e) {
			e.preventDefault();
			if (this.description == '') {
				return;
			} else {
				axios
					.put('http://127.0.0.1:8000/api/todo-update/' + this.id, {
						description: this.description,
					})
					.then(() => {
						this.$router.push({
							name: 'Home',
						});
					})
					.catch((error) => {
						console.log(error);
					});
			}
		},
	},
	created() {
		this.getTodobyId(this.id);
	},
	components: {
		AddTodo,
		Todo,
	},
};
</script>

<style scope>
.modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: table;
	transition: opacity 0.3s ease;
}

.modal-wrapper {
	display: table-cell;
	vertical-align: middle;
}

.modal-container {
	width: 300px;
	margin: 0px auto;
	padding: 20px 30px;
	background-color: #fff;
	border-radius: 2px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
	transition: all 0.3s ease;
	font-family: Helvetica, Arial, sans-serif;
	border: 1px solid rgba(0, 212, 255, 0.7035189075630253);
}

.modal-header h3 {
	margin-top: 0;
	color: #42b983;
}
.modal-title {
	color: rgba(0, 212, 255, 0.7035189075630253);
}
.modal-body {
	margin: 20px 0;
}

.modal-default-button {
	float: right;
}

.modal-enter {
	opacity: 0;
}

.modal-leave-active {
	opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}
form {
	display: flex;
}
input[type='text'] {
	flex: 10;
	padding: 10px;
	border: 1px solid rgba(0, 212, 255, 0.7035189075630253);
	outline: 0;
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
