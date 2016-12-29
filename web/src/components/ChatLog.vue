<template>
	<div class="chatLog" ref="scroll">
		<chatMessage v-for="msg in log" v-bind:message="msg"></chatMessage>
		<slot></slot>
	</div>
</template>

<script>
import ChatMessage from './ChatMessage'

export default {
	name: 'chatLog',
	components: {
		ChatMessage
	},
	props: ['log'],
	watch: {
		'log': function() {
			this.$nextTick(() => {
				let el = this.$refs.scroll
				el.scrollTop = el.scrollHeight - el.clientHeight // скролл вниз
			})
		}
	}
}
</script>

<style>
.chatLog {
	height: 550px;
	overflow-y: auto;
}
</style>
