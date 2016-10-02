ospokemon.menu = {}

ospokemon.menu.template = {}

$.get('html/actionbutton.html').done(function(data) {
	ospokemon.menu.template.actionbutton = data
})

$('.actionsmenu').draggable().resizable()

ospokemon.menu.Actions = function() {
	if (!$('.actionsmenu').is(':hidden')) {
		$('.actionsmenu').hide()
		return
	}

	$('.actionsmenu').show()
	$.each(ospokemon.player.data.actions, function(i, a) {
		var actionsmenuli = $('.actionsmenu .panel-body')[0]
		var actionbutton = $(ospokemon.menu.template.actionbutton)[0]

		$('span', actionbutton).text(a.spellid)

		$(actionsmenuli).append(actionbutton)
	});
}

$('.playermenu').draggable().resizable()

ospokemon.menu.Player = function() {
	if (!$('.playermenu').is(':hidden')) {
		$('.playermenu').hide()
		return
	}

	$('.playermenu').show()
}