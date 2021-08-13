var express = require("express");

/* Only examples */
describe("Our application", function () {
  var app, date;

  // Timeout for tests that take time
  this.timeout(5000);

  // Called once before any of the tests in this block begin.
  before(function (done) {
    app = express();
    // Any asynchronous action with a callback.
    app.listen(3000, function (err) {
      if (err) {
        return done(err);
      }
      done();
    });
  });

  // Called once before each of the tests in this block.
  beforeEach(function () {
    date = new Date();
  });

  // Called after all of the tests in this block complete.
  after(function () {
    console.log("Our applicationa tests done!");
  });

  // Called once after each of the tests in this block.
  afterEach(function () {
    console.log("The date for that one was", date);
  });

  it("should understand basic mathematical principles", function () {
    // We want tests to pass.
    if (5 == 3) {
      // Hope we don't get here.
      throw new Error("Oh no.");
    }
  });

  it("should understand basic truths", function () {
    // We want tests to pass.
    if (false) {
      // Hope we don't get here.
      throw new Error("Oh no.");
    }
  });

  describe("(deeper)", function () {
    // Called once before any of the tests in this block begin.
    before(function () {
      console.log("Begin going deeper!");
    });

    it("should perform basic math", function () {
      // We want tests to pass.
      if (1 + 1 != 2) {
        // Hope we don't get here.
        throw new Error("Oh no.");
      }
    });

    it("should perform basic counting", function () {
      // We want tests to pass.
      if ("abc".length != 3) {
        // Hope we don't get here.
        throw new Error("Oh no.");
      }
    });
  });
});
