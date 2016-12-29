<template>
	<div class="chatMessage" v-bind:class="{outgoing: message.isOutgoing}">
		<img>
		<div class="message">{{message.a}}</div>
		<div class="clearfix"></div>
	</div>
</template>

<script>
export default {
	name: 'chatMessage',
	props: ['message']
}
</script>

<style>
.chatMessage {
	min-height: 30px;
}

.chatMessage img {
	width: 30px;
	height: 30px;
	background: #ddd;
	float: left;
	display: block;
	border-radius: 15px;
	margin: 0 2px;
}

.chatMessage .message {
	/*width: 360px;*/
	padding: 5px;
	margin: 1px 0 1px 30px;
	/*float: left;*/
}

.chatMessage.outgoing { 
	/*background-color: #f00; */
	text-align: right;
}


.chatMessage.outgoing img {
	float: right;
}

.chatMessage.outgoing .message {
	margin: 1px 30px 1px 0;
	/*float: right;*/
}
</style>
