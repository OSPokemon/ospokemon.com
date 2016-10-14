ospokemon.SaveElement({
	constructor: function(data) {
		$(this).droppable({
			accept: ".actionbutton",
			classes: {
				"ui-droppable-active": "ui-state-active",
				"ui-droppable-hover": "ui-state-hover"
			},
			drop: function(event, ui) {
				var bindingbutton = event.target
				actionbutton = ui.draggable[0]

				ospokemon.websocket.Send('Binding.Add', {
					'key': bindingbutton.data.key+'',
					'spellid': actionbutton.data.spellid
				})

				ospokemon.player.Update()
			}
		})

		return this
	},
	refresh: function() {
		if (this.data.spellid < 1) {
			$('.key', this).html('+' + this.data.key)
			$(this).addClass('empty')
		} else {
			$('.key', this).html(this.data.key)
			$(this).removeClass('empty')
			$('img', this).attr("src", this.data.image)
		}
	}
})