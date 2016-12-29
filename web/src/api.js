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
