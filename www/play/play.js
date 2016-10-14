ospokemon = {}

ospokemon.elements = {}

ospokemon.LoadElement = function(name) {
	var element = ospokemon.elements[name]
	if (element) {
		return new Promise(function(resolve, reject) {
			resolve(element)
		})
	} else {
		ospokemon.elements[name] = {
			name: name,
			html: false,
			script: false,
			build: function(data) {
				var el = ospokemon.elements[name]
				var html = $(el.html)[0]
				$.each(el.script, function(key, val) {
					html[key] = val
				})
				return html.constructor(data)
			}
		}

		return new Promise(function(resolve, reject) {
			$.get(name+'.html')
			.done(function(data) {
				ospokemon.elements[name].html = data
			})
			.fail(function(err) {
				console.error(err)
			})
			.always(function() {
				$.get(name+'.js')
				.done(function(data) {
					ospokemon.elements[name].script = eval(data)
				})
				.fail(function(err) {
					console.log(err)
				})
				.always(function() {
					resolve(ospokemon.elements[name])
				})
			})
		})
	}
}

ospokemon.SaveElement = function(config) {
	return config
}

ospokemon.BuildElement = function(name) {
	return new Promise(function(resolve, reject) {
		ospokemon.LoadElement(name).then(function(el) {
			resolve(el.build())
		})
	})
}

ospokemon.player = {}

ospokemon.player.Update = function() {
	$.getJSON('/api/player', function(data) {
		ospokemon.player.data = data
		ospokemon.event.Fire('Player.Update')
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
			f.apply(null, args)
		}
	}
}

ospokemon.websocket = new WebSocket('ws://' + window.location.host + '/api/websocket')

ospokemon.websocket.onmessage = function (e) {
	var data = JSON.parse(e.data, e.data)
}

ospokemon.websocket.onclose = function(e) {
	ospokemon.event.Fire("Websocket.Close")
}

ospokemon.websocket.Send = function(event, cmd) {
	ospokemon.websocket.send(JSON.stringify({
		"Username": ospokemon.player.data.username,
		"Event": event,
		"Message": JSON.stringify(cmd)
	}))
}

$.get('menu.js')

ospokemon.BuildElement('menu/bindings').then(function(el) {
	$('body').append(el)
})
ospokemon.BuildElement('menu/actions').then(function(el) {
	$('body').append(el)
})

$.get('cmd/load.js')
