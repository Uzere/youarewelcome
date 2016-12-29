<template>
	<div class="chatInput input-group input-group-lg">
      <input type="text" class="form-control" placeholder="Введите сообщение" v-bind:value="message" v-on:input="handleInput" v-on:keyup.enter="handleSend">
      <span class="input-group-btn">
        <button class="btn btn-primary" type="button" v-on:click="handleSend" v-bind:disabled="message==''"></button>
      </span>
    </div>
</template>

<script>
export default {
	name: 'chatInput',
	props: ['value'],
	data() {
		return {
			message: ''
		}
	},
	methods: {
		handleInput(event) {
			// let msg = this.message
			this.message = event.target.value
			this.$emit('input', this.message)
		},
		handleSend() {
			// let msg = this.message
			this.$emit('send')
		}
	},
	watch: {
		'value': function() {
			console.log(this.value)
			this.message = this.value
		}
	}
}
</script>

<style>
.chatInput {
	margin-top: 3px;
}
</style>