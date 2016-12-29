<template>
	<div class="chatInput input-group input-group-lg">
      <input type="text" class="form-control" placeholder="Введите сообщение" v-bind:value="message" v-on:input="handleInput" v-on:keyup.enter="handleSend">
      <span class="input-group-btn">
        <button class="btn btn-primary" type="button" v-on:click="handleSend" v-bind:disabled="message==''">
        	<span class="glyphicon glyphicon-send leftFix"></span>
        </button>
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
			this.message = event.target.value
			this.$emit('input', this.message)
		},
		handleSend() {
			this.$emit('send')
		}
	},
	watch: {
		'value': function() {
			this.message = this.value
		}
	}
}
</script>

<style>
.chatInput {
	margin-top: 3px;
}

.chatInput .leftFix {
	margin-left: -3px;
}
</style>