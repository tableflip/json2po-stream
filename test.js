var test = require('tape')
var pocreate = require('./')

test('Creates an entry', function (t) {
  t.plan(1)

  var expected = [
    'msgid "TEST 1"',
    'msgstr "TESTING 123"'
  ].join('\n') + '\n'

  var out = ''

  var pc = pocreate()

  pc.on('data', function (data) { out += data })

  pc.write(JSON.stringify({id: 'TEST 1', str: 'TESTING 123'}) + '\n')

  pc.end(function () {
    console.log(out)
    t.equal(out, expected, 'Output was expected')
    t.end()
  })
})
