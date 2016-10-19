ospokemon.SaveElement({
	constructor: function() {
		ospokemon.menu = this

		ospokemon.BuildElement('menu/bindings').then(function(el) {
			ospokemon.menu.bindings = el
			$('body').append(el)
		})
		ospokemon.BuildElement('menu/actions').then(function(el) {
			ospokemon.menu.actions = el
			$('body').append(el)
		})
		ospokemon.BuildElement('menu/player').then(function(el) {
			ospokemon.menu.player = el
			$('body').append(el)
		})

		ospokemon.BuildElement('camera').then(function(el) {
			ospokemon.camera = el
			$('body').append(el)

			ospokemon.LoadElementScript('keyboard').then(function(el) {
				ospokemon.keyboard = el.script.constructor()
			})
		})

		return this
	}
})