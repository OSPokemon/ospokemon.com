ospokemon.event.On("Websocket.Close", function(data) {
	window.location.href = '/login'
})
