ospokemon = {}

ospokemon.player = {}

ospokemon.load = {}

ospokemon.load.Script = function(path, cb) {
  return $.get(path).done(cb)
  .fail(function() {
    console.log(arguments)
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

	if (!ospokemon.event[event]) return

	for (var i = 0; i < ospokemon.event[event].length; i++) {
		var f = ospokemon.event[event][i]

		if (f) {
			f.apply(null, args)
		}
	}
}

ospokemon.load.Script("websocket.js")