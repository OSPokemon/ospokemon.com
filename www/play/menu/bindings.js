ospokemon.SaveElement({
	constructor: function(data) {
		ospokemon.menu.bindings = this

		ospokemon.event.On('Player.Update', this.refresh)

		ospokemon.BuildElement('menu/bindings/bar').then(function(bar) {
			ospokemon.menu.bindings.bar = bar
			$(ospokemon.menu.bindings).append(bar)
		})

		return this
	},
	refresh: function() {
		ospokemon.menu.bindings.bar.refresh()
		return this
	}
})
