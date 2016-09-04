ospokemon = {}
ospokemon.load = {}

ospokemon.load.Script = function(path, cb) {
  return $.get(path).done(cb)
  .fail(function() {
    console.log(arguments)
  })
}