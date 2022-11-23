"use strict";

var sinon = require('sinon');

describe('index.js', function () {
  var spy;
  beforeEach(function () {
    spy = sinon.spy(console, 'log');
  });
  afterEach(function () {
    spy.restore();
  });
  describe('writeCards()', function () {
    it('returns an array of thank you messages for each name provided to the function', function () {
      expect(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")).to.deep.eq(["Thank you, Guadalupe, for the wonderful surprise gift!", "Thank you, Ollie, for the wonderful surprise gift!", "Thank you, Aki, for the wonderful surprise gift!"]);
    });
  });
  describe('countDown()', function () {
    afterEach(function () {
      spy.restore();
    });
    it('invokes console.log once for each number, counting down from the number provided to zero', function () {
      countDown(10);
      expect(spy.callCount, "Expected countDown(10) to invoke 11 console.logs").to.eq(11);
    });
    it('logs each number when counting down, starting from the number provided', function () {
      countDown(4);
      expect(spy.calledWithExactly(4), "Expected countDown(4) to log 4 first").to.be["true"];
      expect(spy.calledWithExactly(3), "Expected countDown(4) to log 3 after 4").to.be["true"];
      expect(spy.calledWithExactly(2), "Expected countDown(4) to log 2 after 3").to.be["true"];
      expect(spy.calledWithExactly(1), "Expected countDown(4) to log 1 after 2").to.be["true"];
      expect(spy.calledWithExactly(0), "Expected countDown(4) to log 0 after 1").to.be["true"];
    });
  });
});