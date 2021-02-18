var message;
message = 'abc';
var endsWithC = message.endsWith('c');
var endWithC = message.endsWith('c'); //preferred approach
var anotherWay = message.endsWith('c');
/* This Type assertion doen't change the type of variable at run time, infact its not gonna
restructure the object in memory! Its purely a way to tell the typescript compiler about a variable
so that we can access the intelligence */
