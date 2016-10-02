ospokemon = {}

ospokemon.player = {}

ospokemon.player.Update = function() {
	$.getJSON('/api/player', function(data) {
		ospokemon.event.Fire("Player.Update", data)
	})
}

ospokemon.event = {}

ospokemon.event.On = function(event, f) {
	ospokemon.event[event] = ospokemon.event[event] || []
	ospokemon.event[event].push(f)
	return ospokemon.event[event].length - 1
}

ospokemon.event.Off = function(event, id) {
	ospokemon.event[event][id] = false
}

ospokemon.event.Fire = function() {
	var args = Array.prototype.slice.call(arguments)
	var event = args.shift()

	if (!ospokemon.event[event]) {
		console.log('no handlers for event: '+event)
		return
	}

	for (var i = 0; i < ospokemon.event[event].length; i++) {
		var f = ospokemon.event[event][i]

		if (f) {
			setTimeout(function() {
				f.apply(null, args)
			}, 0)
		}
	}
}

ospokemon.websocket = new WebSocket('ws://' + window.location.host + '/api/websocket')

ospokemon.websocket.onmessage = function (e) {
	ospokemon.event.Fire("Websocket.Message", JSON.parse(e.data))
}

ospokemon.websocket.onclose = function(e) {
	ospokemon.event.Fire("Websocket.Close")
}

ospokemon.websocket.Send = function(cmd) {
	ospokemon.websocket.send(JSON.stringify({
		"Username": ospokemon.player.data.username,
		"Message": cmd
	}))
}

$.get('menu.js')
$.get('cmd/load.js')
