# Identical

Identical is a simple node module that translates between numeric ids and alphanumeric ids using a user definable alphabet (a string representing the conversion table). 

Why? Because:
- Shorter URLs == Cooler URLs;
- Your row-ids are shy;
- Base36 is too mainstream for you.

## Usage

```js
var Identical = require('identical');

var i = new Identical('0123456789abcdefghijklmnoprstuvxwyz');

console.log(i.stringify(123456789)); // prints '2c9g1u'
console.log(i.numerify('2c9g1u')); // prints '123456789'
```

## License

[MIT](http://opensource.org/licenses/MIT).
