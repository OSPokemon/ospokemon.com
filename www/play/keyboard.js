ospokemon.SaveElement({
	constructor: function() {
		$('body').keydown(this.keydown)
		$('body').keyup(this.keyup)
		return this
	},
	keydown: function(e) {
	},
	keyup: function(e) {
		var key = e.key
		ospokemon.event.Fire('Key.Up', key)
	}
})