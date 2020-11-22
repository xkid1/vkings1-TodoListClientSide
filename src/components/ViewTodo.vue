<template>
	<div class="viewTodo">
		<div class="modal">
			<transition name="modal">
				<div class="modal-mask">
					<div class="modal-wrapper">
						<div class="modal-container">
							<div class="modal-header">
								<h5 class="modal-title">
									View todo
								</h5>
							</div>
							<div class="modal-body">
								<h5>Id: {{ viewTodo.id }}</h5>
								<p>View Details: {{ viewTodo.description }}</p>
							</div>
							<div class="modal-footer">
								<button class="modal-default-button" @click="CloseModlae">
									close
								</button>
							</div>
						</div>
					</div>
				</div>
			</transition>
		</div>
		<AddTodo />
		<Todo />
	</div>
</template>

<script>
import axios from 'axios';
import AddTodo from '@/components/addTodo';
import Todo from '@/components/Todo';
export default {
	data() {
		return {
			id: this.$route.params.id,
			viewTodo: {},
		};
	},
	methods: {
		CloseModlae() {
			this.$router.push({
				name: 'Home',
			});
		},
	},
	created() {
		axios
			.get('http://127.0.0.1:8000/api/todo-update/' + this.id)
			.then((res) => {
				this.viewTodo = res.data;
			})
			.catch((error) => {
				console.log(error);
			});
	},
	components: {
		AddTodo,
		Todo,
	},
};
</script>

<style scoped>
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

.modal-header {
	color: #42b983;
	border-bottom: 1px solid rgba(0, 212, 255, 0.7035189075630253);
}
.modal-title {
	margin-top: 0;
	margin-left: 5px;
	color: rgba(0, 212, 255, 0.7035189075630253);
}
.modal-body {
	margin: 10px 0;
}
.modal-footer {
	padding-bottom: 12px;
	margin-bottom: 10px;
}

.modal-default-button {
	cursor: pointer;
	border-radius: 3px;
	color: rgba(0, 212, 255, 0.7035189075630253);
	padding: 5px 8px;
	background: none;
	border: 1px solid rgba(0, 212, 255, 0.7035189075630253);
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
</style>
