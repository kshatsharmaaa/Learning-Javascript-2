# Javascript runtime environment :
JRE is like a big container that has all the components required to run JS code like JS engine, set of APIs, event loop, callback queue, microtask queue.
JRE isnt possible without JS engine(heart)
every browser has JRE
Nodejs also has JRE

ECMAScript is the governing body of JS language

JS ENgine : PARSING (splits code into tokens) convert into abstractsyntaxtree --> COMPILATION  -->  EXECUTION
JS has Just in time compilation
Interpreter : executes code line by line
Compiler : whole code is compiled first even before executing -> new code is formed and then it is executed
Interpret : code is fast executed
Compiler : more efficiency
JS can behave as interpreted or compiled language everything depends on Js engine, so js engine can use interpreter and compiler both so called just intime compiler.. best of the both worlds
execution is done with the help of memory heap and the call stack
we also have the garbage collector tries to free up memory whenever possible using mark & sweep algo 
