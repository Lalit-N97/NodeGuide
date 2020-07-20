# NodeGuide

Nodejs Fundamentals

Node js important modules -

<ul>
<li>http</li>
<li>https (http + encryption of response)</li>
<li>os</li>
<li>fs</li>
<li>path</li>
</ul>

Important Notes -

1. require(<module_name>) is used to import module functionalities into .js file.
   It returns an object that is used to call functions of that imported module. for example -
   const http = require('http'); where http is an inbuilt module and you can use this module's
   function "createServer()" using the http object defined above, like this - http.createServer(user_defined_callback_function_goes_here) .  
   For a user defined module that you have created on your own e.g - greet module. importing this module
   takes a little different syntax. ie. const greet = require('./greet'); - so in general for a user defined
   module you have to import it via specifying its path inside that require() function.
2. Adding {"start" : "node app.js"} in package.json in scripts tag. "start" is a special name, thats why when this is used we have to run our server(app.js) using cmd - npm start(special_name). But if we write our own name e.g -{"startMyServer" : "node app.js"} instead of special name - "start", then we should run the server using - npm run startMyServer(user_defined_name)
