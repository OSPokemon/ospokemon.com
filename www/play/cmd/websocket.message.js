ospokemon.event.On("Websocket.Message", function(data) {
	ospokemon.event.Fire(data.event, data.data)
})
