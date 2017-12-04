Insights into Javascript so far:

It's scripted, so there is no main. You can drop into the app wherever you want depending on which script you call from the command line.

There are lots of syntax changes as the language has evolved. Importing and exporting is still a bit confusing.

Testing is done with jasmine.

I am not sure how mock objects should be set up in node. I have an object: "greeter", which has a method: "greet". The method "greet", takes two parameters, a logger and an input string. I am testing the method by injecting a mock logger, but perhaps I should be constructing a greeter injecting the mock logger at a higher level. I have not yet looked into classes and object initializers. 

QUESTIONS:
Where do you find out what version of javascript you are running? Is this settable? Would the node version determine which version of javascript you should write your app in?

FURTHER RESEARCH TOPICS:

Dependency injection with node.

Classes and constructors.
