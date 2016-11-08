# moment-random
> Generates a new random moment.js object

## Install

```
$ npm install --save moment-random
```

### Usage


Basic
```
const momentRandom = require('moment-random');

momentRandom();
// > random date in the past
```

```
momentRandom(end, start)
```

**Arguments**

- `end, start` - anything a moment constructor accepts (see [moment.js docs](http://momentjs.com/docs/#/parsing/) )
