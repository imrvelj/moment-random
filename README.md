
# moment-random
![Build Status](https://travis-ci.org/imrvelj/moment-random.svg?branch=master)

<img src="https://github.com/imrvelj/moment-random/raw/master/moment.png" style="width: 100px" />

> Generates a new random moment.js object

## Install
*make sure you have moment installed*

npm or yarn
```
$ npm install --save moment-random
```
```
$ yarn add moment-random
```

## Usage


---
Just require it like any other library

```js
const momentRandom = require('moment-random');

momentRandom();
// > random date in the past
```

You can also specify an interval
```js
momentRandom(end)
// > random date between 0 unix time and {end} dates

momentRandom(end, start)
// > random date between {start} and {end} dates
```

**Arguments**

- `end, start` - anything a moment constructor accepts (see [moment.js docs](http://momentjs.com/docs/#/parsing/) )
