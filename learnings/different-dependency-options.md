## Logger is a dependency of greeter.js

This pattern has greeter create it's own instance of logger. A logger is "newed up" inside of the greeter.

Some things to note: 
A new greeter, means a new logger.
Constructing a greeter will need a real logger everytime.
Much harder to test. What if we want to inspect the logger? What if we haven't written the logger yet?
Logger and greeter are tightly coupled.
