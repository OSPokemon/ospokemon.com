ospokemon.SaveElement({
	constructor: function() {
		ospokemon.menu = this

		ospokemon.BuildElement('menu/bindings').then(function(el) {
			$('body').append(el)
		})
		ospokemon.BuildElement('menu/actions').then(function(el) {
			$('body').append(el)
		})

		ospokemon.BuildElement('camera').then(function(el) {
			$('body').append(el)

			ospokemon.LoadElementScript('keyboard').then(function(el) {
				ospokemon.keyboard = el.script.constructor()
			})
		})

		return this
	},
	actions: function() {
	},
	player: function() {
		if (!$('.playermenu').is(':hidden')) {
			$('.playermenu').hide()
			return
		}

		$('.playermenu').show()
	}
})