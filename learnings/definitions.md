# use strict: 
declared in quotes at the start of a js file as : 'use strict';

When in strict mode, js will not allow undeclared varables to be used. For example: 
 'use strict';
 x = 2;  // This will throw an error

 It is used to change bad syntax into real errors. It seems that it used to be quite easy to make your program behave unexpectedly. For example:

 let myFruit = "potato";

 myFrut = "orange";

 without use strict, I would have accidentally created a new variable instead of changing the old one.

 