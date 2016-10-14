ospokemon.menu = {}

ospokemon.menu.template = {}

ospokemon.menu.Actions = function() {
	if (!$('.actionsmenu').is(':hidden')) {
		$('.actionsmenu').hide()
		$('#bindings').removeClass('edit')
		return
	}

	$('.actionsmenu').show()
	$('#bindings').addClass('edit')
}

$('.playermenu').draggable().resizable()

ospokemon.menu.Player = function() {
	if (!$('.playermenu').is(':hidden')) {
		$('.playermenu').hide()
		return
	}

	$('.playermenu').show()
}