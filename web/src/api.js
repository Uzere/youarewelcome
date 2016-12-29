// <form
//   class="form-inline"
//   onsubmit="$.post('/api/get-answer', {q: this.q.value}).done(function(resp) {
//     if (resp.ok) {
//       alert(resp.a)
//     } else {
//       console.log('ERR:', resp.error);
//     }
//   }); return false">

export default {
	async getAnswer(message) {
		let data = new window.FormData()
		data.set('q', message)

		let response = await window.fetch('/api/get-answer', {method: 'POST', body: data})
		let json = await response.json()

		if (!json.ok) {
			throw new Error(json.error)
		}

		return json
	}
}
