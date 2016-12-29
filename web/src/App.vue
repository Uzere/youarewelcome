<template>
	<div id="app">
		<chat :delay="true" :sound="true"></chat>
	</div>
</template>

<script>
import Chat from './components/Chat'

export default {
	name: 'app',
	components: {
		Chat
	}
}
</script>

<style>
@import url(../node_modules/bootstrap/dist/css/bootstrap.css);

#app {
	width: 400px;
	height: 600px;
	margin: 60px auto 0;
}
</style>
