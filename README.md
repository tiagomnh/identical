# Identical

Identical is a simple node module that converts numeric ids to string ids using the provided alphabet.

```js
var Identical = require('identical');

var i = new Identical('0123456789abcdefghijklmnoprstuvxwyz');

console.log(i.stringify(123456789)); // prints '2c9g1u'
console.log(i.numerify('2c9g1u')); // prints '123456789'
```

## License

[MIT](http://opensource.org/licenses/MIT).