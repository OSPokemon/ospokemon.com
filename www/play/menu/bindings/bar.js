ospokemon.SaveElement({
	buttons: {},
	constructor: function(data) {
		var bar = this

		ospokemon.LoadElement('menu/bindings/button').then(function(el) {
			for (var bindingcount = 0; bindingcount < 10; bindingcount++) {
				var button = el.build()
				var key = (bindingcount + 1) % 10 // 1, 2, 3, ..., 0

				bar.buttons[key] = button

				button.data = {
					'key': key, 
					'spellid': false,
					'timer': 0,
					'image': false
				}

				button.refresh()

				$(bar).append(button)
			}
		})

		return this
	},
	refresh: function() {
		$.each(this.buttons, function(i, button) {
			var binding = ospokemon.player.data.bindings[i]
			if (binding) { 
				button.data = binding
				button.refresh()
			} else {
			}
		})
		return this
	},
	fire: function(key) {
		if ($(this.buttons[key]).hasClass('empty')) {
			console.log('empty')
			return
		}

		this.buttons[key].fire()
	}
})