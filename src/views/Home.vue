<template>
	<div class="home">
		<AddTodo />
		<Todo />
	</div>
</template>
<script>
import AddTodo from '@/components/addTodo';
import Todo from '@/components/Todo';
export default {
	components: {
		AddTodo,
		Todo,
	},
};
</script>
