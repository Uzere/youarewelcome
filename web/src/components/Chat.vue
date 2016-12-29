<template>
	<div class="chat">
		<chatLog v-bind:log="log">
			<div class="typing">
				<span v-if="typing">Шушпанчик печатает..</span>
			</div>
		</chatLog>
		<chatInput v-model="message" v-on:send="handle"></chatInput>
		<audio ref="notify">
			<source src="/static/notify.mp3" type="audio/mpeg">
		</audio>
	</div>
</template>

<script>
import ChatLog from './ChatLog.vue'
import ChatInput from './ChatInput.vue'
import Api from '../api'

export default {
	name: 'chat',
	components: {
		ChatLog,
		ChatInput
	},
	data() {
		return {
			message: '',
			log: [],
			typing: false
		}
	},
	methods: {
		async handle() {
			function timeout(ms) {
				return new Promise(resolve => setTimeout(resolve, ms))
			}

			let msg = this.message
			this.message = ''

			this.log.push({a: msg, isOutgoing: true})

			this.typing = true
			await timeout(1000) // имитируем печать
			this.typing = false

			let resp = await Api.getAnswer(msg)
			this.$refs.notify.play()
			this.log.push(resp)
		}
	}
}
</script>

<style>
.typing {
	height: 20px;
	width: 100%;
	color: #999;
	text-align: center;
}
</style>
