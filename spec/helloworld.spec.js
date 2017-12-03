const greeter = require ("../greeter.js")
const mockLogger = require("../mockLogger.js");


describe('greeter', ()=> {
  it("contains a spec to expect true to be true", ()=> {
    expect(true).toBe(true);
  });

  it("expects an output of 'hello world'", ()=> {
    const greeting = "hello world"
    greeter.greet(greeting, mockLogger);
    const loggingOutput = mockLogger.logCapture();
    expect(loggingOutput).toBe(greeting);
  });
});
