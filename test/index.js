var isXhr = require('../index');
var expect = require('chai').expect;
var connect = require('connect');
var request = require('supertest');

describe('is xhr', function () {
  var app;
  
  beforeEach(function () {
    app = connect();
  });
  
  it('returns true for xhr request', function (done) {
    app.use(function (req, res, next) {
      res.end(isXhr(req) + '');
    });
    
    request(app)
      .get('/')
      .set('x-requested-with', 'XMLHttpRequest')
      .expect('true')
      .end(done);
  });
  
  it('returns false for non xhr request', function (done) {
      app.use(function (req, res, next) {
        res.end(isXhr(req) + '');
      });
      
      request(app)
        .get('/')
        .expect('false')
        .end(done);
    });
  
});