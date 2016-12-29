<template>
	<div id="app">
		<hello></hello>
		<button class="btn btn-default" type="submit" v-on:click="handle">Button</button>
	</div>
</template>

<script>
import Hello from './components/Hello'
import Api from './api'

export default {
	name: 'app',
	components: {
		Hello
	},
	methods: {
		async handle() {
			console.log(await Api.getAnswer(''))
		}
	}
}
</script>

<style>
@import url(../node_modules/bootstrap/dist/css/bootstrap.css);

#app {
	background: #aaa;
	width: 400px;
	height: 600px;
	margin: 60px auto 0;
}
</style>
