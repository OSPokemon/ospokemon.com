ospokemon.menu = {}

ospokemon.menu.template = {}

$.get('html/actionbutton.html').done(function(data) {
	ospokemon.menu.template.actionbutton = data
})

$('.actionsmenu').draggable().resizable()

ospokemon.menu.Actions = function() {
	if (!$('.actionsmenu').is(':hidden')) {
		$('.actionsmenu').hide()
		$('#bindings').removeClass('edit')
		return
	}

	$('.actionsmenu').show()
	$('#bindings').addClass('edit')
}

ospokemon.menu.Actions.Update = function() {
	$('.actionsmenu .panel-body').empty()

	var actionsmenu = $('.actionsmenu .panel-body')

	$.each(ospokemon.player.data.actions, function(i, a) {
		var actionbutton = ospokemon.menu.ActionButton(a)
		actionsmenu.append(actionbutton)
	})
}

ospokemon.menu.ActionButton = function(data) {
	var actionbutton = $(ospokemon.menu.template.actionbutton)

	$('span', actionbutton).text(data.spellid)

	actionbutton.draggable({ revert: "invalid" })
	actionbutton[0].data = data

	return actionbutton
}

$('.playermenu').draggable().resizable()

ospokemon.menu.Player = function() {
	if (!$('.playermenu').is(':hidden')) {
		$('.playermenu').hide()
		return
	}

	$('.playermenu').show()
}