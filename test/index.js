const prettier = require('prettier')
console.log(prettier.format('foo ( );', { semi: false, parser: 'babel' }))
