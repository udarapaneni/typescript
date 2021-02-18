let message;

message = 'abc';

let endsWithC = message.endsWith('c');
let endWithC = (<string>message).endsWith('c'); //preferred approach
let anotherWay = (message as string).endsWith('c');

/* This Type assertion doen't change the type of variable at run time, infact its not gonna
restructure the object in memory! Its purely a way to tell the typescript compiler about a variable 
so that we can access the intelligence */
