ospokemon.SaveElement({
	constructor: function() {
		$(this).draggable().resizable()
		ospokemon.event.On('Player.Update', this.refresh)
		return this
	},
	toggle: function() {
		var el = $(ospokemon.menu.player)
		
		if (!el.is(':hidden')) {
			el.hide()
			return
		}

		el.show()
	},
	refresh: function() {
		$('.playermenu-name', ospokemon.menu.player).text(ospokemon.player.data.username)
		$('.playermenu-level', ospokemon.menu.player).text('Lv. '+ospokemon.player.data.level)
		$('.progress-bar', ospokemon.menu.player).attr("aria-valuenow", ospokemon.player.data.experience)
		$('.playermenu-experience span', ospokemon.menu.player).text(ospokemon.player.data.experience+'XP')
		$('.playermenu-portrait', ospokemon.menu.player).attr("src", ospokemon.player.data.image)
	}
})