"use strict";

let str = "Hello";

str.test = 5; // (*)

alert(str.test);

//with use strict it will be an error because we can't add properties to a string
//without use strict it will be undefined because it will be a temporary object
