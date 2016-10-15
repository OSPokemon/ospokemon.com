ospokemon.SaveElement({
	constructor: function(data) {
		ospokemon.menu.actions = this
		$(this).draggable().resizable()

		ospokemon.event.On('Player.Update', this.refresh)

		return this
	},
	toggle: function() {
		if (!$(ospokemon.menu.actions).is(':hidden')) {
			$(ospokemon.menu.actions).hide()
			$('#bindings').removeClass('edit')
			return
		}

		$(ospokemon.menu.actions).show()
		$('#bindings').addClass('edit')
	},
	refresh: function() {
		var actionsmenu = $('.panel-body', ospokemon.menu.actions)
		actionsmenu.empty()

		ospokemon.LoadElement('menu/actions/button').then(function(el) {
			$.each(ospokemon.player.data.actions, function(i, a) {
				var button = el.build(a)
				button.refresh()
				actionsmenu.append(button)
			})
		})

		return this
	}
})
