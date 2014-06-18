# is-xhr

Determine if incoming request is an XHR request

## Install

```
npm install is-xhr --save
```

## Usage

```js
var isXhr = require('is-xhr');
var connect = require('connect');
var app = connect();
var http = require('http');

app.use(function (req, res, next) {
  res.end(isXhr(req) + '');
});

http.createServer(app).listen(3000);
```

## Run Tests

```
npm install
npm test
```
