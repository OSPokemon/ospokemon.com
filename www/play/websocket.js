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
